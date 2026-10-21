import {
  CountryService
} from "./chunk-4U26N45P.js";
import {
  WalletEncryptionService
} from "./chunk-WIGHP2N4.js";
import {
  MatSelectModule
} from "./chunk-RM2644J3.js";
import {
  MatInputModule
} from "./chunk-AICPTZP5.js";
import {
  MatFormFieldModule
} from "./chunk-HWNQWMK7.js";
import {
  AuthApiService
} from "./chunk-ZQKMV4NA.js";
import {
  AuthService
} from "./chunk-OJPCXVQ6.js";
import {
  HttpWrapperService
} from "./chunk-BCBZJBUY.js";
import {
  SessionService
} from "./chunk-WSS6AKQE.js";
import {
  AuthUtils
} from "./chunk-EVWXSBKG.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-UUIVQBYS.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-M5KDIZH5.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-YSJP7SXK.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-CQIQSUBU.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DVRFI3SJ.js";
import {
  TranslocoModule,
  TranslocoPipe
} from "./chunk-R5W3A6HI.js";
import {
  Router
} from "./chunk-HYFP557I.js";
import {
  environment
} from "./chunk-PMCYMBOC.js";
import {
  CommonModule,
  Component,
  HostListener,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  ViewChild,
  ViewEncapsulation,
  firstValueFrom,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-PNPEHISK.js";
import {
  __async
} from "./chunk-F5M2C4EZ.js";

// src/app/core/services/biometric-security.service.ts
var BiometricSecurityService = class _BiometricSecurityService {
  /**
   * Checks if the browser supports WebAuthn/Passkeys.
   */
  isPasskeySupported() {
    return __async(this, null, function* () {
      return typeof PublicKeyCredential !== "undefined" && typeof PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable === "function" && (yield PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable());
    });
  }
  /**
   * Registers a new Passkey for biometric authentication.
   */
  registerPasskey(username, userId) {
    return __async(this, null, function* () {
      const challenge = crypto.getRandomValues(new Uint8Array(32));
      const publicKey = {
        challenge,
        rp: {
          name: "Verifik",
          id: window.location.hostname
        },
        user: {
          id: userId,
          name: username,
          displayName: username
        },
        pubKeyCredParams: [
          { alg: -7, type: "public-key" },
          { alg: -257, type: "public-key" }
        ],
        authenticatorSelection: {
          authenticatorAttachment: "platform",
          userVerification: "required",
          requireResidentKey: true
        },
        timeout: 6e4,
        attestation: "none"
      };
      const credential = yield navigator.credentials.create({
        publicKey
      });
      if (!credential) {
        throw new Error("Passkey registration failed");
      }
      return {
        credentialId: credential.id
      };
    });
  }
  /**
   * Authenticates via Passkey (biometric verification).
   */
  authenticatePasskey() {
    return __async(this, arguments, function* (credentialIds = []) {
      const challenge = crypto.getRandomValues(new Uint8Array(32));
      const publicKey = {
        challenge,
        rpId: window.location.hostname,
        userVerification: "required",
        timeout: 6e4
      };
      if (credentialIds.length > 0) {
        publicKey.allowCredentials = credentialIds.map((id) => ({
          id: this.base64ToUint8Array(id),
          type: "public-key"
        }));
      }
      const credential = yield navigator.credentials.get({
        publicKey
      });
      if (!credential) {
        throw new Error("Passkey authentication failed");
      }
      return {
        credentialId: credential.id
      };
    });
  }
  /**
   * Derives an encryption key from a stable subject (clientId for login passkeys).
   */
  deriveEncryptionKey(subject) {
    return __async(this, null, function* () {
      const salt = new TextEncoder().encode("Verifik_Passkey_Salt_v1");
      const subjectBytes = new TextEncoder().encode(subject);
      const keyMaterial = yield crypto.subtle.importKey("raw", subjectBytes, { name: "PBKDF2" }, false, [
        "deriveBits",
        "deriveKey"
      ]);
      return yield crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt,
        iterations: 1e5,
        hash: "SHA-256"
      }, keyMaterial, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
    });
  }
  encryptData(key, data) {
    return __async(this, null, function* () {
      const encodedData = new TextEncoder().encode(data);
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const encrypted = yield crypto.subtle.encrypt({
        name: "AES-GCM",
        iv
      }, key, encodedData);
      return {
        ciphertext: this.arrayBufferToBase64(encrypted),
        iv: this.arrayBufferToBase64(iv)
      };
    });
  }
  decryptData(key, ciphertext, iv) {
    return __async(this, null, function* () {
      const ciphertextBytes = this.base64ToUint8Array(ciphertext);
      const ivBytes = this.base64ToUint8Array(iv);
      const decrypted = yield crypto.subtle.decrypt({
        name: "AES-GCM",
        iv: ivBytes
      }, key, ciphertextBytes);
      return new TextDecoder().decode(decrypted);
    });
  }
  arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  base64ToUint8Array(base64) {
    const base64Standard = base64.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(base64Standard);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  }
  static {
    this.\u0275fac = function BiometricSecurityService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BiometricSecurityService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BiometricSecurityService, factory: _BiometricSecurityService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BiometricSecurityService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/passkey-zelf.service.ts
var PasskeyZelfService = class _PasskeyZelfService {
  constructor() {
    this._httpWrapper = inject(HttpWrapperService);
    this._apiUrl = `${environment.apiUrl}/v2/zelf-key`;
  }
  /**
   * Upload (Create) a Passkey entry in ZelfKey storage.
   * Maps to POST /v2/zelf-key/store/passkeys
   */
  createPasskey(payload) {
    return __async(this, null, function* () {
      return firstValueFrom(this._httpWrapper.sendRequest("post", `${this._apiUrl}/store/passkeys`, payload));
    });
  }
  /**
   * List Passkeys (Check Existence).
   * Maps to GET /v2/zelf-key/public/list
   */
  listPasskeys() {
    return __async(this, arguments, function* (filters = {}, fetchEncryptedContent = false) {
      const params = {};
      if (filters.identifier)
        params.identifier = filters.identifier;
      if (filters.email)
        params.email = filters.email;
      if (filters.phone)
        params.phone = filters.phone;
      if (filters.category !== void 0) {
        if (filters.category)
          params.category = filters.category;
      } else if (!filters.identifier && !filters.email && !filters.phone) {
        params.category = "passKeys";
      }
      const response = yield firstValueFrom(this._httpWrapper.sendRequest("get", `${this._apiUrl}/public/list`, params));
      if (fetchEncryptedContent && response?.data && Array.isArray(response.data)) {
        for (const passkey of response.data) {
          if (!passkey.url || !this._isPasskeyRecord(passkey)) {
            continue;
          }
          try {
            passkey.encryptedContent = yield this._fetchEncryptedContent(passkey.url);
          } catch (error) {
            console.error("[PasskeyZelfService] Failed to fetch encrypted content from IPFS for passkey:", passkey.publicData?.identifier, error);
          }
        }
      }
      return response;
    });
  }
  /**
   * Email/phone Pinata lists can include appRegistration (and other) pins whose
   * `url` points at a PNG. Only passKeys JSON blobs are decryptable.
   */
  _isPasskeyRecord(record) {
    const type = `${record.publicData?.type || ""}`;
    const category = `${record.publicData?.category || ""}`;
    return type === "passKeys" || category.endsWith("_passKeys");
  }
  _fetchEncryptedContent(url) {
    return __async(this, null, function* () {
      const res = yield fetch(url);
      const contentType = `${res.headers.get("content-type") || ""}`.toLowerCase();
      if (contentType.includes("image/")) {
        throw new Error(`IPFS URL is not JSON (content-type: ${contentType})`);
      }
      const raw = yield res.text();
      const trimmed = raw.trim();
      if (!trimmed || trimmed.charCodeAt(0) === 137 || trimmed.startsWith("PNG")) {
        throw new Error("IPFS URL returned an image, not passkey JSON");
      }
      const encryptedFile = JSON.parse(trimmed);
      const payloadString = encryptedFile.encryptedToken || encryptedFile;
      return typeof payloadString === "string" ? JSON.parse(payloadString) : payloadString;
    });
  }
  static {
    this.\u0275fac = function PasskeyZelfService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PasskeyZelfService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PasskeyZelfService, factory: _PasskeyZelfService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasskeyZelfService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/layout/common/auth-modal/auth-modal.component.ts
var _c0 = ["countryButton"];
var _c1 = (a0) => ({ "bg-blue-50 dark:bg-blue-900/20": a0 });
var _c2 = (a0, a1) => ({ email: a0, phone: a1 });
var _c3 = (a0) => ({ time: a0 });
function AuthModalComponent_div_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx_r0.errorKey()));
  }
}
function AuthModalComponent_div_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function AuthModalComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, AuthModalComponent_div_5_span_1_Template, 3, 3, "span", 15)(2, AuthModalComponent_div_5_span_2_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorKey());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.errorKey() && ctx_r0.error());
  }
}
function AuthModalComponent_div_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 19);
    \u0275\u0275listener("click", function AuthModalComponent_div_6_ng_container_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEmailFlow());
    });
    \u0275\u0275elementStart(2, "mat-icon", 20);
    \u0275\u0275text(3, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 19);
    \u0275\u0275listener("click", function AuthModalComponent_div_6_ng_container_1_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startPhoneFlow());
    });
    \u0275\u0275elementStart(8, "mat-icon", 20);
    \u0275\u0275text(9, "smartphone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 19);
    \u0275\u0275listener("click", function AuthModalComponent_div_6_ng_container_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startWhatsAppFlow());
    });
    \u0275\u0275elementStart(14, "mat-icon", 20);
    \u0275\u0275text(15, "message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 21);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 22)(20, "div", 23);
    \u0275\u0275element(21, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 25)(23, "span", 26);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "authModal.choice.continueEmail"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, "authModal.choice.continueSMS"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 8, "authModal.choice.continueWhatsApp"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 10, "authModal.choice.or"));
  }
}
function AuthModalComponent_div_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 27);
    \u0275\u0275listener("click", function AuthModalComponent_div_6_ng_container_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startWalletFlow());
    });
    \u0275\u0275elementStart(2, "div", 28)(3, "mat-icon", 20);
    \u0275\u0275text(4, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 1, "authModal.choice.continueWallet"));
  }
}
function AuthModalComponent_div_6_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "mat-icon", 31);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32)(5, "span", 33);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "authModal.walletConnected.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (tmp_4_0 = ctx_r0.connectedWalletAddress()) == null ? null : tmp_4_0.substring(0, 6), "...", (tmp_4_0 = ctx_r0.connectedWalletAddress()) == null ? null : tmp_4_0.substring(38), " ");
  }
}
function AuthModalComponent_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a", 37);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "authModal.choice.noAccount"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "authModal.choice.signUp"));
  }
}
function AuthModalComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, AuthModalComponent_div_6_ng_container_1_Template, 26, 12, "ng-container", 15)(2, AuthModalComponent_div_6_ng_container_2_Template, 8, 3, "ng-container", 17)(3, AuthModalComponent_div_6_ng_template_3_Template, 10, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, AuthModalComponent_div_6_div_5_Template, 7, 6, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const connectedWallet_r4 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.hasWeb2Auth());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.connectedWalletAddress())("ngIfElse", connectedWallet_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.hasWeb2Auth());
  }
}
function AuthModalComponent_div_7_ng_container_11_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.passkey.sendCodeInstead"));
  }
}
function AuthModalComponent_div_7_ng_container_11_mat_progress_spinner_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 52);
  }
}
function AuthModalComponent_div_7_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 46);
    \u0275\u0275listener("click", function AuthModalComponent_div_7_ng_container_11_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.signInWithPasskey());
    });
    \u0275\u0275elementStart(2, "mat-icon", 47);
    \u0275\u0275text(3, "fingerprint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 48);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 49)(11, "div", 23);
    \u0275\u0275element(12, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 25)(14, "span", 26);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 50);
    \u0275\u0275listener("click", function AuthModalComponent_div_7_ng_container_11_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sendEmailOtp());
    });
    \u0275\u0275template(18, AuthModalComponent_div_7_ng_container_11_span_18_Template, 3, 3, "span", 15)(19, AuthModalComponent_div_7_ng_container_11_mat_progress_spinner_19_Template, 1, 0, "mat-progress-spinner", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "authModal.passkey.cta"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "authModal.passkey.helper"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "authModal.choice.or"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
  }
}
function AuthModalComponent_div_7_ng_template_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.emailInput.continue"));
  }
}
function AuthModalComponent_div_7_ng_template_12_mat_progress_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 52);
  }
}
function AuthModalComponent_div_7_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function AuthModalComponent_div_7_ng_template_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.continueWithEmail());
    });
    \u0275\u0275template(1, AuthModalComponent_div_7_ng_template_12_span_1_Template, 3, 3, "span", 15)(2, AuthModalComponent_div_7_ng_template_12_mat_progress_spinner_2_Template, 1, 0, "mat-progress-spinner", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r0.isEmailValid || ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
  }
}
function AuthModalComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "mat-icon", 40);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p", 41);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 42)(7, "mat-icon", 43);
    \u0275\u0275text(8, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 44);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275listener("ngModelChange", function AuthModalComponent_div_7_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onEmailChange($event));
    })("keyup.enter", function AuthModalComponent_div_7_Template_input_keyup_enter_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.continueWithEmail());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AuthModalComponent_div_7_ng_container_11_Template, 20, 13, "ng-container", 17)(12, AuthModalComponent_div_7_ng_template_12_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(14, "button", 45);
    \u0275\u0275listener("click", function AuthModalComponent_div_7_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setState("CHOICE"));
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const emailOtpContinue_r8 = \u0275\u0275reference(13);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(5, 6, "authModal.emailInput.infoMessage"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r0.email())("placeholder", \u0275\u0275pipeBind1(10, 8, "authModal.emailInput.placeholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showPasskeyButton)("ngIfElse", emailOtpContinue_r8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 10, "authModal.emailInput.back"), " ");
  }
}
function AuthModalComponent_div_8_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedCountry().flag);
  }
}
function AuthModalComponent_div_8_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 63);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.selectedCountry().dialCode);
  }
}
function AuthModalComponent_div_8_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.phoneInput.selectCountry"));
  }
}
function AuthModalComponent_div_8_div_17_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function AuthModalComponent_div_8_div_17_button_8_Template_button_click_0_listener() {
      const country_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.selectCountry(country_r12));
    });
    \u0275\u0275elementStart(1, "span", 73);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 74)(4, "div", 75);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 76);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const country_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c1, ((tmp_6_0 = ctx_r0.selectedCountry()) == null ? null : tmp_6_0.countryCode) === country_r12.countryCode));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r12.flag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", country_r12.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", country_r12.dialCode, " ");
  }
}
function AuthModalComponent_div_8_div_17_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "authModal.phoneInput.noCountries"), " ");
  }
}
function AuthModalComponent_div_8_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "div", 42)(3, "mat-icon", 67);
    \u0275\u0275text(4, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 68);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275listener("input", function AuthModalComponent_div_8_div_17_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onCountrySearchChange($event.target.value));
    })("click", function AuthModalComponent_div_8_div_17_Template_input_click_5_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 69);
    \u0275\u0275template(8, AuthModalComponent_div_8_div_17_button_8_Template, 8, 6, "button", 70)(9, AuthModalComponent_div_8_div_17_div_9_Template, 3, 3, "div", 71);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", ctx_r0.dropdownPosition().top)("left", ctx_r0.dropdownPosition().left);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r0.countrySearchTerm())("placeholder", \u0275\u0275pipeBind1(6, 8, "authModal.phoneInput.searchCountry"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.filteredCountries());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredCountries().length === 0);
  }
}
function AuthModalComponent_div_8_ng_container_20_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.passkey.sendCodeInstead"));
  }
}
function AuthModalComponent_div_8_ng_container_20_mat_progress_spinner_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 52);
  }
}
function AuthModalComponent_div_8_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 46);
    \u0275\u0275listener("click", function AuthModalComponent_div_8_ng_container_20_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.signInWithPasskey());
    });
    \u0275\u0275elementStart(2, "mat-icon", 47);
    \u0275\u0275text(3, "fingerprint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 48);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 49)(11, "div", 23);
    \u0275\u0275element(12, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 25)(14, "span", 26);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 50);
    \u0275\u0275listener("click", function AuthModalComponent_div_8_ng_container_20_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.sendPhoneOtp());
    });
    \u0275\u0275template(18, AuthModalComponent_div_8_ng_container_20_span_18_Template, 3, 3, "span", 15)(19, AuthModalComponent_div_8_ng_container_20_mat_progress_spinner_19_Template, 1, 0, "mat-progress-spinner", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "authModal.passkey.cta"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 9, "authModal.passkey.helper"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 11, "authModal.choice.or"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
  }
}
function AuthModalComponent_div_8_ng_template_21_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.phoneInput.continue"));
  }
}
function AuthModalComponent_div_8_ng_template_21_mat_progress_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 52);
  }
}
function AuthModalComponent_div_8_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function AuthModalComponent_div_8_ng_template_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.continueWithPhone());
    });
    \u0275\u0275template(1, AuthModalComponent_div_8_ng_template_21_span_1_Template, 3, 3, "span", 15)(2, AuthModalComponent_div_8_ng_template_21_mat_progress_spinner_2_Template, 1, 0, "mat-progress-spinner", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r0.phone() || !ctx_r0.selectedCountry() || ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
  }
}
function AuthModalComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "div", 39)(2, "mat-icon", 40);
    \u0275\u0275text(3, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "p", 41);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 54)(8, "div", 55)(9, "button", 56, 2);
    \u0275\u0275listener("click", function AuthModalComponent_div_8_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleCountryDropdown());
    });
    \u0275\u0275elementStart(11, "span", 57);
    \u0275\u0275template(12, AuthModalComponent_div_8_span_12_Template, 2, 1, "span", 15)(13, AuthModalComponent_div_8_span_13_Template, 2, 1, "span", 58)(14, AuthModalComponent_div_8_span_14_Template, 3, 3, "span", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-icon", 60);
    \u0275\u0275text(16, "arrow_drop_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, AuthModalComponent_div_8_div_17_Template, 10, 10, "div", 61);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 62);
    \u0275\u0275pipe(19, "transloco");
    \u0275\u0275listener("input", function AuthModalComponent_div_8_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPhoneInput($event));
    })("keyup.enter", function AuthModalComponent_div_8_Template_input_keyup_enter_18_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.continueWithPhone());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, AuthModalComponent_div_8_ng_container_20_Template, 20, 13, "ng-container", 17)(21, AuthModalComponent_div_8_ng_template_21_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(23, "button", 45);
    \u0275\u0275listener("click", function AuthModalComponent_div_8_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setState("CHOICE"));
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const phoneOtpContinue_r15 = \u0275\u0275reference(22);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("innerHTML", ctx_r0.state() === "WHATSAPP_INPUT" ? \u0275\u0275pipeBind1(5, 10, "authModal.phoneInput.whatsappInfoMessage") : \u0275\u0275pipeBind1(6, 12, "authModal.phoneInput.infoMessage"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.selectedCountry());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedCountry());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selectedCountry());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isCountryDropdownOpen() && ctx_r0.dropdownPosition());
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.phone())("placeholder", \u0275\u0275pipeBind1(19, 14, "authModal.phoneInput.phonePlaceholder"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.showPasskeyButton)("ngIfElse", phoneOtpContinue_r15);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 16, "authModal.phoneInput.back"), " ");
  }
}
function AuthModalComponent_div_9_p_11_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "authModal.otpVerify.expiresIn", \u0275\u0275pureFunction1(4, _c3, ctx_r0.otpExpiryTimeLabel())), " ");
  }
}
function AuthModalComponent_div_9_p_11_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "authModal.otpVerify.expired"), " ");
  }
}
function AuthModalComponent_div_9_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 86);
    \u0275\u0275template(1, AuthModalComponent_div_9_p_11_ng_container_1_Template, 3, 6, "ng-container", 17)(2, AuthModalComponent_div_9_p_11_ng_template_2_Template, 2, 3, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const otpExpiredLabel_r17 = \u0275\u0275reference(3);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("text-slate-600", !ctx_r0.isOtpExpired)("dark:text-slate-300", !ctx_r0.isOtpExpired)("text-amber-600", ctx_r0.isOtpExpired)("dark:text-amber-400", ctx_r0.isOtpExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isOtpExpired)("ngIfElse", otpExpiredLabel_r17);
  }
}
function AuthModalComponent_div_9_input_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 87);
    \u0275\u0275listener("input", function AuthModalComponent_div_9_input_13_Template_input_input_0_listener($event) {
      const i_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOtpInput($event, i_r19));
    })("paste", function AuthModalComponent_div_9_input_13_Template_input_paste_0_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onOtpPaste($event));
    })("keydown", function AuthModalComponent_div_9_input_13_Template_input_keydown_0_listener($event) {
      const i_r19 = \u0275\u0275restoreView(_r18).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onKeyDown($event, i_r19));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const digit_r20 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", "otp-" + i_r19)("value", digit_r20)("disabled", ctx_r0.isOtpExpired || ctx_r0.isLoading());
  }
}
function AuthModalComponent_div_9_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.otpVerify.verify"));
  }
}
function AuthModalComponent_div_9_mat_progress_spinner_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 52);
  }
}
function AuthModalComponent_div_9_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "authModal.otpVerify.resend"), " ");
  }
}
function AuthModalComponent_div_9_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "transloco");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "authModal.otpVerify.resendIn", \u0275\u0275pureFunction1(4, _c3, ctx_r0.otpResendCooldownTimeLabel())), " ");
  }
}
function AuthModalComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "h3", 80);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 36);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 81);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AuthModalComponent_div_9_p_11_Template, 4, 10, "p", 82);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 83);
    \u0275\u0275template(13, AuthModalComponent_div_9_input_13_Template, 1, 3, "input", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 53);
    \u0275\u0275listener("click", function AuthModalComponent_div_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.state() === "OTP_VERIFY_EMAIL" ? ctx_r0.verifyEmailOtp() : ctx_r0.verifyPhoneOtp());
    });
    \u0275\u0275template(15, AuthModalComponent_div_9_span_15_Template, 3, 3, "span", 15)(16, AuthModalComponent_div_9_mat_progress_spinner_16_Template, 1, 0, "mat-progress-spinner", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 85);
    \u0275\u0275listener("click", function AuthModalComponent_div_9_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resendOtp());
    });
    \u0275\u0275template(18, AuthModalComponent_div_9_ng_container_18_Template, 3, 3, "ng-container", 17)(19, AuthModalComponent_div_9_ng_template_19_Template, 2, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 45);
    \u0275\u0275listener("click", function AuthModalComponent_div_9_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setState("CHOICE"));
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const resendCooldown_r21 = \u0275\u0275reference(20);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "authModal.otpVerify.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 14, ctx_r0.state() === "OTP_VERIFY_EMAIL" ? "authModal.otpVerify.emailMessage" : ctx_r0.state() === "OTP_VERIFY_WHATSAPP" ? "authModal.otpVerify.whatsappMessage" : "authModal.otpVerify.phoneMessage", \u0275\u0275pureFunction2(21, _c2, ctx_r0.email(), ctx_r0.formattedPhoneDestination())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 17, "authModal.otpVerify.ttlHint"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.otpExpiresAt());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.otpArray());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isOtpExpired || ctx_r0.otpArray().join("").length !== 6 || ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.canResendOtp || ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.canResendOtp)("ngIfElse", resendCooldown_r21);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 19, "authModal.otpVerify.back"), " ");
  }
}
function AuthModalComponent_div_10_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "mat-icon", 47);
    \u0275\u0275text(2, "fingerprint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "authModal.passkey.enrollConfirm"));
  }
}
function AuthModalComponent_div_10_mat_progress_spinner_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 95);
  }
}
function AuthModalComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 88)(2, "div", 89)(3, "mat-icon", 90);
    \u0275\u0275text(4, "fingerprint");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 91);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 92);
    \u0275\u0275listener("click", function AuthModalComponent_div_10_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setupPasskeyEnroll());
    });
    \u0275\u0275template(12, AuthModalComponent_div_10_ng_container_12_Template, 6, 3, "ng-container", 15)(13, AuthModalComponent_div_10_mat_progress_spinner_13_Template, 1, 0, "mat-progress-spinner", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 94);
    \u0275\u0275listener("click", function AuthModalComponent_div_10_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.skipPasskeyEnroll());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "authModal.passkey.enrollTitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 9, "authModal.passkey.enrollDescription"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 11, "authModal.passkey.enrollSkip"), " ");
  }
}
function AuthModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38)(1, "h3", 96);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 97);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 98)(8, "button", 99);
    \u0275\u0275listener("click", function AuthModalComponent_div_11_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.connectMetaMask());
    });
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 100);
    \u0275\u0275listener("click", function AuthModalComponent_div_11_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.createAgentWallet());
    });
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "transloco");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 45);
    \u0275\u0275listener("click", function AuthModalComponent_div_11_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.handleWalletBack());
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 6, "authModal.walletConnect.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "authModal.walletConnect.subtitle"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "authModal.walletConnect.metamask"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "authModal.walletConnect.createAgent"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "authModal.walletConnect.back"), " ");
  }
}
function AuthModalComponent_div_12_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 117);
    \u0275\u0275listener("click", function AuthModalComponent_div_12_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.encryptWithPasskey());
    });
    \u0275\u0275elementStart(1, "div", 112)(2, "mat-icon", 47);
    \u0275\u0275text(3, "fingerprint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "transloco");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "authModal.walletEncrypt.createPasskey"));
  }
}
function AuthModalComponent_div_12_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118)(1, "p", 119);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "authModal.walletEncrypt.notSupported"), " ");
  }
}
function AuthModalComponent_div_12_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275element(1, "mat-progress-spinner", 121);
    \u0275\u0275elementEnd();
  }
}
function AuthModalComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 101)(2, "div", 102)(3, "mat-icon", 103);
    \u0275\u0275text(4, "account_balance_wallet");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 104);
    \u0275\u0275element(6, "span", 105);
    \u0275\u0275elementStart(7, "span", 106);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 107);
    \u0275\u0275element(10, "p", 108);
    \u0275\u0275pipe(11, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 109);
    \u0275\u0275template(13, AuthModalComponent_div_12_button_13_Template, 7, 4, "button", 110);
    \u0275\u0275elementStart(14, "button", 111);
    \u0275\u0275listener("click", function AuthModalComponent_div_12_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.usePINInstead());
    });
    \u0275\u0275elementStart(15, "div", 112)(16, "mat-icon", 113);
    \u0275\u0275text(17, "pin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 114);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "transloco");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(21, AuthModalComponent_div_12_div_21_Template, 4, 3, "div", 115)(22, AuthModalComponent_div_12_div_22_Template, 2, 0, "div", 116);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate2(" ", (tmp_1_0 = ctx_r0.tempWalletAddress()) == null ? null : tmp_1_0.substring(0, 6), "...", (tmp_1_0 = ctx_r0.tempWalletAddress()) == null ? null : tmp_1_0.substring(38), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(11, 8, "authModal.walletEncrypt.instruction"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.passkeySupported());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isLoading());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 10, "authModal.walletEncrypt.usePIN"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.passkeySupported());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
  }
}
function AuthModalComponent_div_13_input_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 129);
    \u0275\u0275listener("input", function AuthModalComponent_div_13_input_18_Template_input_input_0_listener($event) {
      const i_r28 = \u0275\u0275restoreView(_r27).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPinInput($event, i_r28));
    })("paste", function AuthModalComponent_div_13_input_18_Template_input_paste_0_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPinPaste($event));
    })("keydown", function AuthModalComponent_div_13_input_18_Template_input_keydown_0_listener($event) {
      const i_r28 = \u0275\u0275restoreView(_r27).index;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onPinKeyDown($event, i_r28));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const digit_r29 = ctx.$implicit;
    const i_r28 = ctx.index;
    \u0275\u0275property("id", "pin-" + i_r28)("value", digit_r29);
  }
}
function AuthModalComponent_div_13_span_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "transloco");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "authModal.pinSetup.encryptWallet"));
  }
}
function AuthModalComponent_div_13_mat_progress_spinner_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 52);
  }
}
function AuthModalComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79)(2, "div", 122)(3, "mat-icon", 123);
    \u0275\u0275text(4, "pin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3", 80);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "transloco");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 36);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 124)(12, "div", 125)(13, "mat-icon", 126);
    \u0275\u0275text(14, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "p", 127);
    \u0275\u0275pipe(16, "transloco");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 83);
    \u0275\u0275template(18, AuthModalComponent_div_13_input_18_Template, 1, 2, "input", 128);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 53);
    \u0275\u0275listener("click", function AuthModalComponent_div_13_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.encryptWithPIN());
    });
    \u0275\u0275template(20, AuthModalComponent_div_13_span_20_Template, 3, 3, "span", 15)(21, AuthModalComponent_div_13_mat_progress_spinner_21_Template, 1, 0, "mat-progress-spinner", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 45);
    \u0275\u0275listener("click", function AuthModalComponent_div_13_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r26);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setState("WALLET_ENCRYPT_CHOICE"));
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "transloco");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, "authModal.pinSetup.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 10, "authModal.pinSetup.subtitle"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(16, 12, "authModal.pinSetup.warning"), \u0275\u0275sanitizeHtml);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.pinArray());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pinArray().join("").length !== 6 || ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isLoading());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isLoading());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 14, "authModal.pinSetup.back"), " ");
  }
}
var AuthModalComponent = class _AuthModalComponent {
  static {
    this.OTP_TTL_MS = 10 * 60 * 1e3;
  }
  static {
    this.OTP_RESEND_COOLDOWN_MS = 2 * 60 * 1e3;
  }
  static {
    this.OTP_VERIFY_STATES = [
      "OTP_VERIFY_EMAIL",
      "OTP_VERIFY_PHONE",
      "OTP_VERIFY_WHATSAPP"
    ];
  }
  get countryDialCodes() {
    return this._countryService.countryDialCodes;
  }
  constructor() {
    this.state = signal("CHOICE");
    this.isLoading = signal(false);
    this.email = signal("");
    this.phone = signal("");
    this.otp = signal("");
    this.otpArray = signal(new Array(6).fill(""));
    this.otpExpiresAt = signal(null);
    this.otpRemainingSeconds = signal(0);
    this.otpResendRemainingSeconds = signal(0);
    this._otpSentAt = null;
    this._otpExpiryTimer = null;
    this.pin = signal("");
    this.pinArray = signal(new Array(6).fill(""));
    this.tempWalletAddress = signal(null);
    this.tempWalletPrivateKey = signal(null);
    this.passkeySupported = signal(false);
    this.passkeyExistsForContact = signal(false);
    this.lastPasskeyAttemptFound = signal(false);
    this.pendingPasskeyToken = signal(null);
    this._passkeyDebounceTimer = null;
    this.connectedWalletAddress = signal(null);
    this.hasWeb2Auth = signal(false);
    this.selectedCountry = signal(null);
    this.countrySearchTerm = signal("");
    this.filteredCountries = signal([]);
    this.isCountryDropdownOpen = signal(false);
    this.dropdownPosition = signal(null);
    this.validationId = signal(null);
    this.phoneGateway = signal("sms");
    this._authService = inject(AuthService);
    this._authApiService = inject(AuthApiService);
    this._dialogRef = inject(MatDialogRef);
    this._router = inject(Router);
    this._countryService = inject(CountryService);
    this._encryptionService = inject(WalletEncryptionService);
    this._biometricSecurity = inject(BiometricSecurityService);
    this._passkeyZelf = inject(PasskeyZelfService);
    this._sessionService = inject(SessionService);
    this._dialogData = inject(MAT_DIALOG_DATA, { optional: true });
    this.projectId = environment.projectId;
    this.projectFlowId = environment.loginProjectFlowId;
    this.error = signal(null);
    this.errorKey = signal(null);
    this.onOtpPaste = (event) => {
      event.preventDefault();
      const digits = this._digitsFromClipboard(event, 6);
      if (!digits.length)
        return;
      this._applyCodeDigits("otp", digits, (next) => {
        this.otpArray.set(next);
        if (next.every((value) => value !== ""))
          this._autoSubmitOtp();
      });
    };
    this.onPinPaste = (event) => {
      event.preventDefault();
      const digits = this._digitsFromClipboard(event, 6);
      if (!digits.length)
        return;
      this._applyCodeDigits("pin", digits, (next) => this.pinArray.set(next));
    };
    this._digitsFromClipboard = (event, max) => (event.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, max).split("");
    this._applyCodeDigits = (prefix, digits, commit) => {
      const next = new Array(6).fill("");
      for (let i = 0; i < 6; i++) {
        next[i] = digits[i] || "";
        const input = document.getElementById(`${prefix}-${i}`);
        if (input)
          input.value = next[i];
      }
      commit(next);
      const focusIndex = Math.max(Math.min(digits.length, 6) - 1, 0);
      setTimeout(() => {
        const input = document.getElementById(`${prefix}-${focusIndex}`);
        input?.focus();
        input?.select();
      }, 0);
    };
    this._autoSubmitOtp = () => {
      setTimeout(() => {
        if (this.state() === "OTP_VERIFY_EMAIL")
          this.verifyEmailOtp();
        if (this.state() === "OTP_VERIFY_PHONE")
          this.verifyPhoneOtp();
        if (this.state() === "OTP_VERIFY_WHATSAPP")
          this.verifyWhatsAppOtp();
      }, 100);
    };
    const defaultCountry = this._countryService.countryDialCodes.find((c) => c.countryCode === "us");
    if (defaultCountry) {
      this.selectedCountry.set(defaultCountry);
    }
    this.filteredCountries.set(this.countryDialCodes);
    const existingAddress = localStorage.getItem("x402_agent_address");
    if (existingAddress) {
      this.connectedWalletAddress.set(existingAddress);
    }
    const storedUser = localStorage.getItem("verifik_account");
    if (storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        if (userData && (userData.id || userData._id)) {
          this.hasWeb2Auth.set(true);
        }
      } catch (error) {
        console.warn("Failed to parse stored user data", error);
      }
    }
    if (this._dialogData?.startWithWallet) {
      setTimeout(() => {
        this.startWalletFlow();
      }, 0);
    }
  }
  ngOnDestroy() {
    this._clearOtpExpiryTimer();
    if (this._passkeyDebounceTimer) {
      clearTimeout(this._passkeyDebounceTimer);
      this._passkeyDebounceTimer = null;
    }
  }
  /**
   * National phone digits with dial code for OTP confirmation copy (e.g. "+57 3202807186").
   */
  formattedPhoneDestination() {
    const country = this.selectedCountry();
    let national = this.phone().replace(/\D/g, "");
    if (!country) {
      return national || this.phone().trim();
    }
    const dialDigits = country.dialCode.replace(/\D/g, "");
    if (national.startsWith(dialDigits)) {
      national = national.substring(dialDigits.length);
    }
    return `${country.dialCode} ${national}`.trim();
  }
  get isOtpExpired() {
    return Boolean(this.otpExpiresAt()) && this.otpRemainingSeconds() <= 0 && _AuthModalComponent.OTP_VERIFY_STATES.includes(this.state());
  }
  /** Resend allowed after 2-minute backend cooldown (or once the code expired). */
  get canResendOtp() {
    if (!_AuthModalComponent.OTP_VERIFY_STATES.includes(this.state())) {
      return false;
    }
    return this.isOtpExpired || this.otpResendRemainingSeconds() <= 0;
  }
  otpExpiryTimeLabel() {
    return this._formatCountdown(this.otpRemainingSeconds());
  }
  otpResendCooldownTimeLabel() {
    return this._formatCountdown(this.otpResendRemainingSeconds());
  }
  _formatCountdown(totalSeconds) {
    const remaining = Math.max(0, totalSeconds);
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    return `${minutes}:${`${seconds}`.padStart(2, "0")}`;
  }
  setState(newState) {
    const previous = this.state();
    this.state.set(newState);
    this.otp.set("");
    this.otpArray.set(new Array(6).fill(""));
    this.error.set(null);
    this.errorKey.set(null);
    const leavingOtp = _AuthModalComponent.OTP_VERIFY_STATES.includes(previous) && !_AuthModalComponent.OTP_VERIFY_STATES.includes(newState);
    if (leavingOtp) {
      this._clearOtpExpiryTimer();
      this.otpExpiresAt.set(null);
      this.otpRemainingSeconds.set(0);
      this.otpResendRemainingSeconds.set(0);
      this._otpSentAt = null;
    }
    const contactStates = ["EMAIL_INPUT", "PHONE_INPUT", "WHATSAPP_INPUT"];
    if (!contactStates.includes(newState) || previous !== newState) {
      if (!contactStates.includes(newState)) {
        this.passkeyExistsForContact.set(false);
      }
    }
    if (newState === "PHONE_INPUT" || newState === "WHATSAPP_INPUT") {
      const defaultCountry = this._countryService.countryDialCodes.find((c) => c.countryCode === "us");
      if (defaultCountry) {
        this.selectedCountry.set(defaultCountry);
      }
      this.countrySearchTerm.set("");
      this.filteredCountries.set(this.countryDialCodes);
      this.passkeyExistsForContact.set(false);
    }
    if (newState === "EMAIL_INPUT" && previous !== "EMAIL_INPUT") {
      this.passkeyExistsForContact.set(false);
    }
  }
  onEmailChange(value) {
    this.email.set(value);
    this._checkPasskeyAvailability(this.isValidEmail(value) ? value.trim() : "");
  }
  get showPasskeyButton() {
    return this.passkeyExistsForContact();
  }
  /**
   * Continue from email: check for an existing passkey first.
   * If one exists, stay on this screen and surface the Passkey CTA (do not send OTP yet).
   */
  continueWithEmail() {
    return __async(this, null, function* () {
      const emailValue = this.email().trim();
      if (!emailValue) {
        this.error.set("Please enter your email address");
        return;
      }
      if (!this.isValidEmail(emailValue)) {
        this.error.set("Please enter a valid email address");
        return;
      }
      if (this.passkeyExistsForContact()) {
        return;
      }
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      try {
        const hasPasskey = yield this._refreshPasskeyAvailability(emailValue);
        if (hasPasskey) {
          this.isLoading.set(false);
          return;
        }
      } catch (e) {
        console.warn("[Passkeys] Availability check failed; falling back to OTP", e);
      }
      this.isLoading.set(false);
      yield this.sendEmailOtp();
    });
  }
  /**
   * Continue from phone/WhatsApp: same passkey-first gate as email.
   */
  continueWithPhone() {
    return __async(this, null, function* () {
      const phoneValue = this.phone().trim();
      const country = this.selectedCountry();
      if (!phoneValue) {
        this.error.set("Please enter your phone number");
        return;
      }
      if (!country) {
        this.error.set("Please select a country");
        return;
      }
      const phoneDigits = phoneValue.replace(/\D/g, "");
      if (!this.isValidPhone(phoneDigits)) {
        this.error.set("Please enter a valid phone number");
        return;
      }
      if (this.passkeyExistsForContact()) {
        return;
      }
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      const contact = this._normalizedPhoneContact();
      try {
        const hasPasskey = yield this._refreshPasskeyAvailability(contact);
        if (hasPasskey) {
          this.isLoading.set(false);
          return;
        }
      } catch (e) {
        console.warn("[Passkeys] Availability check failed; falling back to OTP", e);
      }
      this.isLoading.set(false);
      yield this.sendPhoneOtp();
    });
  }
  // --- Email Flow ---
  startEmailFlow() {
    this.setState("EMAIL_INPUT");
  }
  isValidEmail(email) {
    if (!email || !email.trim())
      return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }
  get isEmailValid() {
    return this.isValidEmail(this.email());
  }
  sendEmailOtp() {
    return __async(this, arguments, function* (options = {}) {
      const emailValue = this.email().trim();
      if (!emailValue) {
        this.error.set("Please enter your email address");
        return;
      }
      if (!this.isValidEmail(emailValue)) {
        this.error.set("Please enter a valid email address");
        return;
      }
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      this._authApiService.sendEmailOtp({
        email: emailValue,
        project: this.projectId,
        type: "login",
        validationMethod: "verificationCode"
      }).subscribe({
        next: (res) => {
          this.isLoading.set(false);
          if (res.data?._id) {
            this.validationId.set(res.data._id);
            this.setState("OTP_VERIFY_EMAIL");
            this._beginOtpCountdown(res.data.expiresAt);
          }
        },
        error: (err) => {
          this.isLoading.set(false);
          if (!options.stayOnOtp) {
            this.setState("EMAIL_INPUT");
          }
          this.setError(err.error?.message || err.error?.code || "Failed to send OTP");
        }
      });
    });
  }
  verifyEmailOtp() {
    return __async(this, null, function* () {
      const code = this.otpArray().join("");
      if (this.isOtpExpired || code.length !== 6 || !this.validationId())
        return;
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      this._authApiService.validateEmailOtp({
        otp: code,
        email: this.email(),
        projectFlow: this.projectFlowId,
        project: this.projectId,
        type: "login"
      }).subscribe({
        next: (res) => {
          this.isLoading.set(false);
          this.handleSuccess(res);
        },
        error: (err) => {
          console.error(err);
          this.isLoading.set(false);
          this.error.set("Invalid Code");
        }
      });
    });
  }
  // --- Phone Flow ---
  startPhoneFlow() {
    this.phoneGateway.set("sms");
    this.setState("PHONE_INPUT");
  }
  // --- WhatsApp Flow ---
  startWhatsAppFlow() {
    this.phoneGateway.set("whatsapp");
    this.setState("WHATSAPP_INPUT");
  }
  isValidPhone(phone) {
    const digitsOnly = phone.replace(/\D/g, "");
    return digitsOnly.length >= 7 && digitsOnly.length <= 15;
  }
  onPhoneInput(event) {
    const input = event.target;
    let value = input.value;
    value = value.replace(/[^\d\s\-()]/g, "");
    this.phone.set(value);
    this._syncPhonePasskeyAvailability();
  }
  onCountrySearchChange(searchTerm) {
    this.countrySearchTerm.set(searchTerm);
    this.filteredCountries.set(this._countryService.filterCountryDialCodes(this.countryDialCodes, searchTerm));
  }
  toggleCountryDropdown() {
    const isOpening = !this.isCountryDropdownOpen();
    this.isCountryDropdownOpen.set(isOpening);
    if (isOpening && this.countryButtonRef) {
      const button = this.countryButtonRef.nativeElement;
      const rect = button.getBoundingClientRect();
      this.dropdownPosition.set({
        top: `${rect.bottom + 4}px`,
        // Fixed positioning doesn't need scrollY
        left: `${rect.left}px`
        // Fixed positioning doesn't need scrollX
      });
    } else {
      this.dropdownPosition.set(null);
    }
  }
  selectCountry(country) {
    this.selectedCountry.set(country);
    this.countrySearchTerm.set("");
    this.filteredCountries.set(this.countryDialCodes);
    this.isCountryDropdownOpen.set(false);
    this.dropdownPosition.set(null);
    this._syncPhonePasskeyAvailability();
  }
  sendPhoneOtp() {
    return __async(this, arguments, function* (options = {}) {
      const phoneValue = this.phone().trim();
      const country = this.selectedCountry();
      if (!phoneValue) {
        this.error.set("Please enter your phone number");
        return;
      }
      if (!country) {
        this.error.set("Please select a country");
        return;
      }
      const phoneDigits = phoneValue.replace(/\D/g, "");
      if (!this.isValidPhone(phoneDigits)) {
        this.error.set("Please enter a valid phone number");
        return;
      }
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      let finalPhone = phoneDigits;
      const dialCodeDigits = country.dialCode.replace("+", "");
      if (phoneDigits.startsWith(dialCodeDigits)) {
        finalPhone = phoneDigits.substring(dialCodeDigits.length);
      }
      const gateway = this.phoneGateway();
      this._authApiService.sendPhoneOtp({
        phone: finalPhone,
        countryCode: country.dialCode,
        project: this.projectId,
        type: "login",
        validationMethod: "verificationCode",
        phoneGateway: gateway
      }).subscribe({
        next: (res) => {
          this.isLoading.set(false);
          if (res.data?._id) {
            this.validationId.set(res.data._id);
            this.setState(gateway === "whatsapp" ? "OTP_VERIFY_WHATSAPP" : "OTP_VERIFY_PHONE");
            this._beginOtpCountdown(res.data.expiresAt);
          }
        },
        error: (err) => {
          this.isLoading.set(false);
          if (!options.stayOnOtp) {
            this.setState(gateway === "whatsapp" ? "WHATSAPP_INPUT" : "PHONE_INPUT");
          }
          this.setError(err.error?.message || err.error?.code || "Failed to send OTP");
        }
      });
    });
  }
  /**
   * Resend after the 2-minute backend cooldown (or after OTP TTL expiry).
   */
  resendOtp() {
    return __async(this, null, function* () {
      if (!this.canResendOtp || this.isLoading()) {
        return;
      }
      this.error.set(null);
      this.errorKey.set(null);
      this.otpArray.set(new Array(6).fill(""));
      if (this.state() === "OTP_VERIFY_EMAIL") {
        yield this.sendEmailOtp({ stayOnOtp: true });
        return;
      }
      yield this.sendPhoneOtp({ stayOnOtp: true });
    });
  }
  verifyPhoneOtp() {
    return __async(this, null, function* () {
      const code = this.otpArray().join("");
      if (this.isOtpExpired || code.length !== 6 || !this.validationId())
        return;
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      const country = this.selectedCountry();
      if (!country)
        return;
      let finalPhone = this.phone().replace(/\D/g, "");
      const dialCodeDigits = country.dialCode.replace("+", "");
      if (finalPhone.startsWith(dialCodeDigits)) {
        finalPhone = finalPhone.substring(dialCodeDigits.length);
      }
      this._authApiService.validatePhoneOtp({
        otp: code,
        phoneValidation: this.validationId(),
        project: this.projectId,
        type: "login",
        phone: finalPhone,
        countryCode: country.dialCode
      }).subscribe({
        next: (res) => {
          this.isLoading.set(false);
          this.handleSuccess(res);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.error.set("Invalid Code");
        }
      });
    });
  }
  verifyWhatsAppOtp() {
    return __async(this, null, function* () {
      yield this.verifyPhoneOtp();
    });
  }
  // --- Wallet Flow ---
  startWalletFlow() {
    this.setState("WALLET_CONNECT");
  }
  /**
   * Handle back navigation from wallet connection
   * If user has Web2 auth, close modal instead of going back to CHOICE
   */
  handleWalletBack() {
    if (this.hasWeb2Auth()) {
      this._dialogRef.close();
    } else {
      this.setState("CHOICE");
    }
  }
  createAgentWallet() {
    return __async(this, null, function* () {
      this.isLoading.set(true);
      try {
        const { ethers } = yield import("./chunk-QHPZFMPC.js");
        const wallet = ethers.Wallet.createRandom();
        console.log("Created Wallet:", wallet.address);
        this.tempWalletAddress.set(wallet.address);
        this.tempWalletPrivateKey.set(wallet.privateKey);
        localStorage.setItem("x402_agent_address", wallet.address);
        const supported = yield this._encryptionService.isPasskeysSupported();
        this.passkeySupported.set(supported);
        this.isLoading.set(false);
        this.setState("WALLET_ENCRYPT_CHOICE");
      } catch (error) {
        console.error("Wallet creation failed:", error);
        this.error.set("Failed to create wallet");
        this.isLoading.set(false);
      }
    });
  }
  /**
   * Connect to MetaMask wallet
   */
  connectMetaMask() {
    return __async(this, null, function* () {
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      try {
        if (!window.ethereum) {
          this.error.set("MetaMask is not installed. Please install MetaMask extension.");
          this.isLoading.set(false);
          return;
        }
        const accounts = yield window.ethereum.request({
          method: "eth_requestAccounts"
        });
        if (!accounts || accounts.length === 0) {
          this.error.set("No accounts found in MetaMask");
          this.isLoading.set(false);
          return;
        }
        const address = accounts[0];
        console.log("Connected MetaMask:", address);
        localStorage.setItem("x402_agent_address", address);
        localStorage.setItem("x402_wallet_type", "metamask");
        this.isLoading.set(false);
        this._dialogRef.close();
        this._sessionService.resetReloadTracking();
        this._sessionService.safeReload();
      } catch (error) {
        console.error("MetaMask connection failed:", error);
        if (error.code === 4001) {
          this.error.set("Connection rejected. Please approve the connection in MetaMask.");
        } else {
          this.error.set("Failed to connect to MetaMask");
        }
        this.isLoading.set(false);
      }
    });
  }
  encryptWithPasskey() {
    return __async(this, null, function* () {
      const privateKey = this.tempWalletPrivateKey();
      if (!privateKey) {
        this.error.set("No wallet to encrypt");
        return;
      }
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      const success = yield this._encryptionService.encryptWithPasskeys(privateKey);
      if (success) {
        localStorage.setItem("x402_wallet_type", "encrypted-model");
        this.tempWalletPrivateKey.set(null);
        this._dialogRef.close(true);
        this._sessionService.resetReloadTracking();
        this._sessionService.safeReload();
      } else {
        this.isLoading.set(false);
        this.error.set("Passkey encryption failed. Please try PIN instead.");
      }
    });
  }
  usePINInstead() {
    this.setState("WALLET_ENCRYPT_PIN");
  }
  encryptWithPIN() {
    return __async(this, null, function* () {
      const privateKey = this.tempWalletPrivateKey();
      const pin = this.pinArray().join("");
      if (!privateKey) {
        this.error.set("No wallet to encrypt");
        return;
      }
      if (pin.length !== 6) {
        this.error.set("Please enter a 6-digit PIN");
        return;
      }
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      const success = yield this._encryptionService.encryptWithPIN(privateKey, pin);
      if (success) {
        localStorage.setItem("x402_wallet_type", "encrypted-model");
        this.tempWalletPrivateKey.set(null);
        this.pinArray.set(new Array(6).fill(""));
        this._dialogRef.close(true);
        this._sessionService.resetReloadTracking();
        this._sessionService.safeReload();
      } else {
        this.isLoading.set(false);
        this.error.set("PIN encryption failed. Please try again.");
      }
    });
  }
  // --- Helpers ---
  /**
   * Set error message with translation key mapping
   * Maps API error codes to translation keys, or uses the message directly if not mapped
   */
  setError(message) {
    const errorMap = {
      invalid_email: "authModal.errors.invalidEmail",
      invalid_phone: "authModal.errors.invalidPhone",
      otp_recently_sent: "authModal.errors.otpRecentlySent",
      phoneValidation_has_expired: "authModal.errors.otpExpired",
      phone_validation_has_expired: "authModal.errors.otpExpired"
    };
    const errorKey = errorMap[message];
    if (errorKey) {
      this.errorKey.set(errorKey);
      this.error.set(null);
    } else {
      this.error.set(message);
      this.errorKey.set(null);
    }
  }
  handleSuccess(res) {
    this._clearOtpExpiryTimer();
    this.otpExpiresAt.set(null);
    this.otpRemainingSeconds.set(0);
    this.otpResendRemainingSeconds.set(0);
    this._otpSentAt = null;
    const data = res.data || res;
    const tempToken = data.token || data.accessToken;
    if (!tempToken) {
      console.warn("No temp token found in response", res);
      this._dialogRef.close(true);
      return;
    }
    void this._afterOtpSuccess(tempToken);
  }
  _clearOtpExpiryTimer() {
    if (this._otpExpiryTimer) {
      clearInterval(this._otpExpiryTimer);
      this._otpExpiryTimer = null;
    }
  }
  _beginOtpCountdown(expiresAtValue) {
    this._clearOtpExpiryTimer();
    this._otpSentAt = /* @__PURE__ */ new Date();
    const expiresAt = expiresAtValue ? new Date(expiresAtValue) : new Date(Date.now() + _AuthModalComponent.OTP_TTL_MS);
    if (Number.isNaN(expiresAt.getTime())) {
      this.otpExpiresAt.set(new Date(Date.now() + _AuthModalComponent.OTP_TTL_MS));
    } else {
      this.otpExpiresAt.set(expiresAt);
    }
    this._tickOtpExpiry();
    this._otpExpiryTimer = setInterval(() => this._tickOtpExpiry(), 1e3);
  }
  _tickOtpExpiry() {
    const expiresAt = this.otpExpiresAt();
    if (!expiresAt) {
      this.otpRemainingSeconds.set(0);
      this.otpResendRemainingSeconds.set(0);
      return;
    }
    const now = Date.now();
    const ttlRemaining = Math.max(0, Math.floor((expiresAt.getTime() - now) / 1e3));
    this.otpRemainingSeconds.set(ttlRemaining);
    if (this._otpSentAt) {
      const cooldownEndsAt = this._otpSentAt.getTime() + _AuthModalComponent.OTP_RESEND_COOLDOWN_MS;
      this.otpResendRemainingSeconds.set(Math.max(0, Math.floor((cooldownEndsAt - now) / 1e3)));
    } else {
      this.otpResendRemainingSeconds.set(0);
    }
    if (ttlRemaining === 0) {
      this._clearOtpExpiryTimer();
    }
  }
  /**
   * After OTP: skip enroll if a passkey already exists; otherwise offer Faster login.
   */
  _afterOtpSuccess(tempToken) {
    return __async(this, null, function* () {
      this._authService.accessToken = tempToken;
      this.pendingPasskeyToken.set(tempToken);
      const contact = this._resolveContactForPasskey();
      try {
        const supported = yield this._biometricSecurity.isPasskeySupported();
        if (supported && contact) {
          const existing = yield this._listPasskeysForContact(contact, false);
          if (existing.length === 0) {
            this.isLoading.set(false);
            this.state.set("PASSKEY_ENROLL");
            return;
          }
          this.passkeyExistsForContact.set(true);
        }
      } catch (e) {
        console.warn("[Passkeys] Could not check existing passkeys before enroll offer", e);
      }
      this._completeWeb2Login(tempToken);
    });
  }
  skipPasskeyEnroll() {
    const token = this.pendingPasskeyToken();
    if (!token) {
      this._dialogRef.close(true);
      return;
    }
    this.isLoading.set(true);
    this._completeWeb2Login(token);
  }
  setupPasskeyEnroll() {
    return __async(this, null, function* () {
      const token = this.pendingPasskeyToken();
      const contact = this._resolveContactForPasskey();
      if (!token || !contact || this.isLoading())
        return;
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      try {
        yield this._registerPasskey(token, contact);
        this._completeWeb2Login(this._authService.accessToken || token);
      } catch (error) {
        console.error("[Passkeys] Enrollment failed", error);
        this.isLoading.set(false);
        this.errorKey.set("authModal.passkey.failed");
        this.error.set(null);
      }
    });
  }
  signInWithPasskey() {
    return __async(this, null, function* () {
      if (this.isLoading())
        return;
      const contact = this._resolveContactForPasskey();
      if (!contact) {
        this.errorKey.set(this.state() === "EMAIL_INPUT" ? "authModal.errors.invalidEmail" : "authModal.errors.invalidPhone");
        return;
      }
      this.isLoading.set(true);
      this.error.set(null);
      this.errorKey.set(null);
      const loggedIn = yield this._checkAndLoginWithPasskey(contact);
      if (!loggedIn) {
        this.isLoading.set(false);
        this.errorKey.set(this.lastPasskeyAttemptFound() ? "authModal.passkey.failed" : "authModal.passkey.notFound");
        this.error.set(null);
      }
    });
  }
  _completeWeb2Login(tempToken) {
    this._authService.accessToken = tempToken;
    this._authApiService.projectLogin().subscribe({
      next: (loginRes) => {
        const realToken = loginRes.data?.accessToken || loginRes.accessToken;
        if (realToken) {
          this._authService.accessToken = realToken;
          AuthUtils.storeAccessToken(realToken);
          this._authApiService.getSession().subscribe({
            next: (sessionRes) => {
              const userData = sessionRes.data?.user || sessionRes.user || sessionRes;
              localStorage.setItem("verifik_account", JSON.stringify(userData));
              this._dialogRef.close(true);
              this._sessionService.resetReloadTracking();
              this._sessionService.safeReload();
            },
            error: (err) => {
              console.error("Session fetch failed", err);
              this.error.set("Failed to fetch session");
              this.isLoading.set(false);
            }
          });
        } else {
          this.error.set("Failed to obtain access token");
          this.isLoading.set(false);
        }
      },
      error: (err) => {
        console.error("Project login failed", err);
        this.error.set("Login failed");
        this.isLoading.set(false);
      }
    });
  }
  _completeSessionWithToken(token) {
    this._authService.accessToken = token;
    AuthUtils.storeAccessToken(token);
    this._authApiService.getSession().subscribe({
      next: (sessionRes) => {
        const userData = sessionRes.data?.user || sessionRes.user || sessionRes;
        localStorage.setItem("verifik_account", JSON.stringify(userData));
        this._dialogRef.close(true);
        this._sessionService.resetReloadTracking();
        this._sessionService.safeReload();
      },
      error: (err) => {
        console.error("Session fetch failed", err);
        this.error.set("Failed to fetch session");
        this.isLoading.set(false);
      }
    });
  }
  _resolveContactForPasskey() {
    if (this.isValidEmail(this.email()))
      return this.email().trim();
    return this._normalizedPhoneContact();
  }
  _normalizedPhoneContact() {
    const country = this.selectedCountry();
    const phoneDigits = this.phone().replace(/\D/g, "");
    if (!country || !this.isValidPhone(phoneDigits))
      return "";
    let finalPhone = phoneDigits;
    const dialCodeDigits = country.dialCode.replace("+", "");
    if (finalPhone.startsWith(dialCodeDigits)) {
      finalPhone = finalPhone.substring(dialCodeDigits.length);
    }
    return `${country.dialCode}${finalPhone}`;
  }
  _syncPhonePasskeyAvailability() {
    this._checkPasskeyAvailability(this._normalizedPhoneContact());
  }
  _checkPasskeyAvailability(contact) {
    if (this._passkeyDebounceTimer)
      clearTimeout(this._passkeyDebounceTimer);
    this.passkeyExistsForContact.set(false);
    if (!contact)
      return;
    this._passkeyDebounceTimer = setTimeout(() => __async(this, null, function* () {
      try {
        yield this._refreshPasskeyAvailability(contact);
      } catch (e) {
        console.error("Failed to check passkey availability", e);
      }
    }), 500);
  }
  /**
   * Immediate (non-debounced) passkey lookup used by Continue so we never race OTP send.
   */
  _refreshPasskeyAvailability(contact) {
    return __async(this, null, function* () {
      if (!contact) {
        this.passkeyExistsForContact.set(false);
        return false;
      }
      const matches = yield this._listPasskeysForContact(contact, false);
      const exists = matches.length > 0;
      this.passkeyExistsForContact.set(exists);
      return exists;
    });
  }
  _listPasskeysForContact(contact, fetchEncryptedContent = false) {
    return __async(this, null, function* () {
      const isEmail = contact.includes("@");
      const response = yield this._passkeyZelf.listPasskeys(isEmail ? { email: contact } : { phone: contact }, fetchEncryptedContent);
      return (response?.data || []).filter((f) => {
        const type = f.publicData?.type;
        const category = f.publicData?.category;
        const isPasskey = type === "passKeys" || `${category || ""}`.endsWith("_passKeys");
        return isPasskey && category === `${this.projectId}_passKeys`;
      });
    });
  }
  _checkAndLoginWithPasskey(contact) {
    return __async(this, null, function* () {
      this.lastPasskeyAttemptFound.set(false);
      let matches = [];
      try {
        matches = yield this._listPasskeysForContact(contact, true);
      } catch (e) {
        console.error("[Passkey Login] Failed to list passkeys", e);
        return false;
      }
      if (!matches.length)
        return false;
      this.lastPasskeyAttemptFound.set(true);
      try {
        const allowCredentials = matches.map((m) => m.publicData?.credentialId).filter((id) => Boolean(id));
        const { credentialId: usedCredentialId } = yield this._biometricSecurity.authenticatePasskey(allowCredentials);
        const ordered = [
          ...matches.filter((m) => m.publicData?.credentialId === usedCredentialId),
          ...matches.filter((m) => m.publicData?.credentialId !== usedCredentialId)
        ];
        const clientId = `${ordered[0]?.publicData?.clientId || ""}`.trim() || `${`${ordered[0]?.publicData?.identifier || ""}`.replace(/_passKey$/, "")}`.trim();
        if (!clientId) {
          throw new Error("Passkey record is missing client id");
        }
        const encryptionKey = yield this._biometricSecurity.deriveEncryptionKey(clientId);
        const token = yield this._decryptFirstAvailablePasskey(ordered, encryptionKey);
        if (!token) {
          throw new Error("Unable to decrypt any passkey record for this account");
        }
        this._completeSessionWithToken(token);
        return true;
      } catch (e) {
        console.error("[Passkey Login] Authentication failed", e);
        return false;
      }
    });
  }
  _decryptFirstAvailablePasskey(passkeys, encryptionKey) {
    return __async(this, null, function* () {
      for (const passkey of passkeys) {
        try {
          let iv;
          let ciphertext;
          if (passkey.encryptedContent) {
            ({ iv, ciphertext } = passkey.encryptedContent);
          } else if (passkey.url) {
            const res = yield fetch(passkey.url);
            const contentType = `${res.headers.get("content-type") || ""}`.toLowerCase();
            if (contentType.includes("image/")) {
              continue;
            }
            const raw = (yield res.text()).trim();
            if (!raw || raw.charCodeAt(0) === 137 || raw.startsWith("PNG")) {
              continue;
            }
            const encryptedFile = JSON.parse(raw);
            const payloadString = encryptedFile.encryptedToken || encryptedFile;
            ({ iv, ciphertext } = typeof payloadString === "string" ? JSON.parse(payloadString) : payloadString);
            passkey.encryptedContent = { iv, ciphertext };
          } else {
            continue;
          }
          if (!iv || !ciphertext)
            continue;
          return yield this._biometricSecurity.decryptData(encryptionKey, ciphertext, iv);
        } catch (e) {
          console.warn("[Passkey Login] Could not decrypt a passkey record, trying the next one", e);
        }
      }
      return null;
    });
  }
  _registerPasskey(token, contact) {
    return __async(this, null, function* () {
      AuthUtils.storeAccessToken(token);
      this._authService.accessToken = token;
      let tokenForVault = token;
      try {
        const refreshResponse = yield firstValueFrom(this._authApiService.projectLogin(12));
        const refreshed = refreshResponse?.data?.accessToken || refreshResponse?.accessToken;
        if (refreshed) {
          tokenForVault = refreshed;
          this._authService.accessToken = refreshed;
          AuthUtils.storeAccessToken(refreshed);
          this.pendingPasskeyToken.set(refreshed);
        }
      } catch (e) {
        console.warn("[Passkey Registration] Failed to refresh token for long-lived passkey", e);
      }
      const clientId = this._resolveClientIdFromToken(tokenForVault) || this._resolveClientIdFromToken(token);
      if (!clientId) {
        throw new Error("Unable to resolve client id for passkey registration");
      }
      const userId = new TextEncoder().encode(contact);
      const { credentialId } = yield this._biometricSecurity.registerPasskey(contact, userId);
      const encryptionKey = yield this._biometricSecurity.deriveEncryptionKey(clientId);
      const { ciphertext, iv } = yield this._biometricSecurity.encryptData(encryptionKey, tokenForVault);
      const payloadString = JSON.stringify({
        iv,
        ciphertext,
        tokenExp: this._getTokenExpiration(tokenForVault)
      });
      const identifier = `${clientId}_passKey`;
      const isEmail = contact.includes("@");
      yield this._passkeyZelf.createPasskey({
        publicData: {
          identifier,
          clientId,
          project: this.projectId,
          category: `${this.projectId}_passKeys`,
          credentialId,
          expiresAt: this._getTokenExpiration(tokenForVault),
          email: isEmail ? contact : void 0,
          phone: !isEmail ? contact : void 0
        },
        identifier,
        payload: payloadString
      });
    });
  }
  _resolveClientIdFromToken(token) {
    try {
      const decoded = AuthUtils.getJwtPayload(token) || {};
      return `${decoded["clientId"] || decoded["id"] || ""}`.trim();
    } catch {
      return "";
    }
  }
  _getTokenExpiration(token) {
    try {
      const payload = AuthUtils.getJwtPayload(token) || {};
      if (typeof payload["exp"] === "number")
        return payload["exp"];
      const expiresAt = payload["expiresAt"];
      if (typeof expiresAt === "number") {
        return expiresAt > 1e12 ? Math.floor(expiresAt / 1e3) : expiresAt;
      }
      return 0;
    } catch {
      return 0;
    }
  }
  onOtpInput(event, index) {
    const input = event.target;
    let value = input.value;
    value = value.replace(/\D/g, "");
    if (value.length > 1) {
      const currentOtp2 = [...this.otpArray()];
      const digits = value.split("").slice(0, 6 - index);
      for (let i = 0; i < digits.length && index + i < 6; i++) {
        currentOtp2[index + i] = digits[i];
        const inputElement = document.getElementById(`otp-${index + i}`);
        if (inputElement) {
          inputElement.value = digits[i];
        }
      }
      this.otpArray.set(currentOtp2);
      input.value = currentOtp2[index] || "";
      const nextIndex = Math.min(index + digits.length, 5);
      setTimeout(() => {
        const nextInput = document.getElementById(`otp-${nextIndex}`);
        if (nextInput) {
          nextInput.focus();
          nextInput.select();
        }
      }, 0);
      if (currentOtp2.every((v) => v !== "") && currentOtp2.length === 6) {
        setTimeout(() => {
          if (this.state() === "OTP_VERIFY_EMAIL")
            this.verifyEmailOtp();
          if (this.state() === "OTP_VERIFY_PHONE")
            this.verifyPhoneOtp();
          if (this.state() === "OTP_VERIFY_WHATSAPP")
            this.verifyWhatsAppOtp();
        }, 100);
      }
      return;
    }
    const currentOtp = [...this.otpArray()];
    if (value.length > 0) {
      const digit = value.slice(-1);
      currentOtp[index] = digit;
      this.otpArray.set(currentOtp);
      input.value = digit;
      if (index < 5) {
        setTimeout(() => {
          const nextInput = document.getElementById(`otp-${index + 1}`);
          if (nextInput) {
            nextInput.focus();
            nextInput.select();
          }
        }, 0);
      }
      if (currentOtp.every((v) => v !== "") && currentOtp.length === 6) {
        setTimeout(() => {
          if (this.state() === "OTP_VERIFY_EMAIL")
            this.verifyEmailOtp();
          if (this.state() === "OTP_VERIFY_PHONE")
            this.verifyPhoneOtp();
          if (this.state() === "OTP_VERIFY_WHATSAPP")
            this.verifyWhatsAppOtp();
        }, 100);
      }
    } else {
      currentOtp[index] = "";
      this.otpArray.set(currentOtp);
      input.value = "";
    }
  }
  onKeyDown(event, index) {
    if (event.key === "Backspace" && !this.otpArray()[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  }
  // PIN input handlers (similar to OTP)
  onPinInput(event, index) {
    const input = event.target;
    let value = input.value;
    value = value.replace(/\D/g, "");
    if (value.length > 1) {
      const currentPin2 = [...this.pinArray()];
      const digits = value.split("").slice(0, 6 - index);
      for (let i = 0; i < digits.length && index + i < 6; i++) {
        currentPin2[index + i] = digits[i];
        const inputElement = document.getElementById(`pin-${index + i}`);
        if (inputElement) {
          inputElement.value = digits[i];
        }
      }
      this.pinArray.set(currentPin2);
      input.value = currentPin2[index] || "";
      const nextIndex = Math.min(index + digits.length, 5);
      setTimeout(() => {
        const nextInput = document.getElementById(`pin-${nextIndex}`);
        if (nextInput) {
          nextInput.focus();
          nextInput.select();
        }
      }, 0);
      return;
    }
    const currentPin = [...this.pinArray()];
    if (value.length > 0) {
      const digit = value.slice(-1);
      currentPin[index] = digit;
      this.pinArray.set(currentPin);
      input.value = digit;
      if (index < 5) {
        setTimeout(() => {
          const nextInput = document.getElementById(`pin-${index + 1}`);
          if (nextInput) {
            nextInput.focus();
            nextInput.select();
          }
        }, 0);
      }
    } else {
      currentPin[index] = "";
      this.pinArray.set(currentPin);
      input.value = "";
    }
  }
  onPinKeyDown(event, index) {
    if (event.key === "Backspace" && !this.pinArray()[index] && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      prevInput?.focus();
    }
  }
  onDocumentClick(event) {
    const target = event.target;
    if (this.isCountryDropdownOpen() && !target.closest(".country-selector-container")) {
      this.isCountryDropdownOpen.set(false);
      this.dropdownPosition.set(null);
    }
  }
  static {
    this.\u0275fac = function AuthModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuthModalComponent, selectors: [["auth-modal"]], viewQuery: function AuthModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.countryButtonRef = _t.first);
      }
    }, hostBindings: function AuthModalComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function AuthModalComponent_click_HostBindingHandler($event) {
          return ctx.onDocumentClick($event);
        }, false, \u0275\u0275resolveDocument);
      }
    }, decls: 17, vars: 15, consts: [["connectedWallet", ""], ["emailOtpContinue", ""], ["countryButton", ""], ["phoneOtpContinue", ""], ["resendCooldown", ""], ["otpExpiredLabel", ""], [1, "w-full", "max-w-sm", "mx-auto", "p-2"], [1, "text-center", "mb-8"], [1, "text-xl", "font-bold", "text-slate-900", "dark:text-white"], ["class", "mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm text-center", 4, "ngIf"], ["class", "space-y-3", 4, "ngIf"], ["class", "space-y-4", 4, "ngIf"], ["class", "space-y-6", 4, "ngIf"], [1, "mt-8", "text-center", "text-[10px]", "text-slate-400"], [1, "mb-4", "p-3", "bg-red-100", "text-red-700", "rounded-md", "text-sm", "text-center"], [4, "ngIf"], [1, "space-y-3"], [4, "ngIf", "ngIfElse"], ["class", "pt-4 text-center", 4, "ngIf"], ["mat-stroked-button", "", 1, "w-full", "!h-12", "!justify-start", "!px-4", "!rounded-lg", "!border-slate-300", "dark:!border-slate-700", 3, "click"], [1, "mr-3", "text-slate-500"], [1, "!text-slate-700", "dark:!text-slate-200"], [1, "relative", "py-2"], [1, "absolute", "inset-0", "flex", "items-center"], [1, "w-full", "border-t", "border-slate-200", "dark:border-slate-700"], [1, "relative", "flex", "justify-center", "text-xs", "uppercase"], [1, "bg-white", "dark:bg-slate-800", "px-2", "text-slate-500"], ["mat-stroked-button", "", 1, "w-full", "!h-12", "!justify-start", "!px-4", "!rounded-lg", "!border-slate-300", "dark:!border-slate-700", "hover:bg-slate-50", "dark:hover:bg-slate-800", "transition-colors", 3, "click"], [1, "flex", "items-center", "w-full"], [1, "w-full", "h-12", "px-4", "rounded-lg", "border", "border-green-200", "dark:border-green-800", "bg-green-50", "dark:bg-green-900/10", "flex", "items-center", "justify-between", "cursor-default"], [1, "flex", "items-center", "gap-3"], [1, "text-green-600", "dark:text-green-400"], [1, "flex", "flex-col"], [1, "text-xs", "font-semibold", "text-green-700", "dark:text-green-300"], [1, "text-[10px]", "font-mono", "text-green-600", "dark:text-green-400", "opacity-80"], [1, "pt-4", "text-center"], [1, "text-sm", "text-slate-500"], ["href", "https://access.verifik.co/sign-up/6332941ccde4f719d9c00f9e", 1, "text-sm", "text-blue-600", "font-semibold", "ml-1", "cursor-pointer", "hover:underline"], [1, "space-y-4"], [1, "p-3", "bg-blue-50", "dark:bg-blue-900/10", "border", "border-blue-100", "dark:border-blue-900/20", "rounded-lg", "flex", "gap-3"], [1, "text-blue-500", "!w-5", "!h-5", "!text-[20px]", "shrink-0", "mt-0.5"], [1, "text-xs", "!text-blue-700", "dark:!text-blue-200", "[&_strong]:text-inherit", "leading-snug", 3, "innerHTML"], [1, "relative"], [1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "text-slate-400"], ["type", "email", 1, "w-full", "pl-10", "pr-4", "py-3", "rounded-lg", "border", "border-slate-300", "dark:border-slate-700", "bg-transparent", "focus:ring-2", "focus:ring-blue-500", "focus:outline-none", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], ["mat-button", "", 1, "w-full", 3, "click"], ["type", "button", 1, "w-full", "h-11", "rounded-lg", "bg-slate-900", "text-white", "font-semibold", "flex", "items-center", "justify-center", "gap-2", "hover:bg-slate-800", "disabled:opacity-60", "transition-colors", 3, "click", "disabled"], [1, "!w-5", "!h-5", "!text-[20px]"], [1, "text-xs", "text-center", "text-slate-500"], [1, "relative", "py-1"], ["mat-stroked-button", "", 1, "w-full", "!h-11", "!rounded-lg", 3, "click", "disabled"], ["diameter", "20", "mode", "indeterminate", 4, "ngIf"], ["diameter", "20", "mode", "indeterminate"], ["mat-flat-button", "", "color", "primary", 1, "w-full", "!h-11", "!rounded-lg", 3, "click", "disabled"], [1, "flex", "space-x-2"], [1, "relative", "country-selector-container"], ["type", "button", 1, "w-28", "px-3", "py-3", "rounded-lg", "border", "border-slate-300", "dark:border-slate-700", "bg-white", "dark:bg-slate-800", "text-slate-700", "dark:text-slate-300", "flex", "items-center", "justify-between", "hover:bg-slate-50", "dark:hover:bg-slate-700", "focus:ring-2", "focus:ring-blue-500", "focus:outline-none", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-2", "text-sm"], ["class", "font-medium", 4, "ngIf"], ["class", "text-slate-400", 4, "ngIf"], [1, "!w-4", "!h-4", "!text-[16px]", "text-slate-400"], ["class", "fixed z-[1000] w-80 max-h-80 !bg-white dark:!bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden", 3, "top", "left", 4, "ngIf"], ["type", "tel", 1, "flex-1", "px-4", "py-3", "rounded-lg", "border", "border-slate-300", "dark:border-slate-700", "bg-transparent", "!text-slate-900", "dark:!text-slate-100", "focus:ring-2", "focus:ring-blue-500", "focus:outline-none", 3, "input", "keyup.enter", "ngModel", "placeholder"], [1, "font-medium"], [1, "text-slate-400"], [1, "fixed", "z-[1000]", "w-80", "max-h-80", "!bg-white", "dark:!bg-slate-800", "border", "border-slate-200", "dark:border-slate-700", "rounded-lg", "shadow-lg", "overflow-hidden"], [1, "p-2", "border-b", "border-slate-200", "dark:border-slate-700"], [1, "absolute", "left-2", "top-1/2", "-translate-y-1/2", "!w-4", "!h-4", "!text-[16px]", "text-slate-400"], ["type", "text", 1, "w-full", "pl-8", "pr-3", "py-2", "text-sm", "rounded-md", "border", "border-slate-300", "dark:border-slate-600", "bg-transparent", "!text-slate-900", "dark:!text-slate-100", "focus:ring-2", "focus:ring-blue-500", "focus:outline-none", 3, "input", "click", "value", "placeholder"], [1, "max-h-64", "overflow-y-auto"], ["type", "button", "class", "w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 text-left transition-colors", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "px-4 py-3 text-sm text-slate-500 text-center", 4, "ngIf"], ["type", "button", 1, "w-full", "px-4", "py-3", "flex", "items-center", "gap-3", "hover:bg-slate-50", "dark:hover:bg-slate-700", "text-left", "transition-colors", 3, "click", "ngClass"], [1, "text-2xl"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-medium", "!text-slate-900", "dark:!text-slate-100", "truncate"], [1, "text-sm", "text-slate-500", "dark:text-slate-400", "font-medium"], [1, "px-4", "py-3", "text-sm", "text-slate-500", "text-center"], [1, "space-y-6"], [1, "text-center", "space-y-2"], [1, "font-bold"], [1, "text-xs", "text-slate-400"], ["class", "text-sm font-medium", 3, "text-slate-600", "dark:text-slate-300", "text-amber-600", "dark:text-amber-400", 4, "ngIf"], [1, "flex", "justify-between", "gap-2"], ["type", "text", "inputmode", "numeric", "maxlength", "1", "autocomplete", "one-time-code", "class", "w-12 h-14 text-center text-2xl font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50", 3, "id", "value", "disabled", "input", "paste", "keydown", 4, "ngFor", "ngForOf"], ["mat-button", "", "color", "primary", "type", "button", 1, "w-full", 3, "click", "disabled"], [1, "text-sm", "font-medium"], ["type", "text", "inputmode", "numeric", "maxlength", "1", "autocomplete", "one-time-code", 1, "w-12", "h-14", "text-center", "text-2xl", "font-bold", "rounded-lg", "border", "border-slate-300", "dark:border-slate-700", "bg-transparent", "focus:ring-2", "focus:ring-blue-500", "focus:outline-none", "disabled:opacity-50", 3, "input", "paste", "keydown", "id", "value", "disabled"], [1, "flex", "flex-col", "items-center", "text-center", "gap-3"], [1, "w-16", "h-16", "rounded-2xl", "bg-blue-50", "dark:bg-blue-900/20", "border", "border-blue-100", "dark:border-blue-800", "flex", "items-center", "justify-center"], [1, "text-blue-600", "dark:text-blue-400", "!w-8", "!h-8", "!text-[32px]"], [1, "text-sm", "text-slate-500", "dark:text-slate-400", "leading-relaxed", "px-1"], ["type", "button", 1, "w-full", "h-12", "rounded-xl", "bg-slate-900", "text-white", "font-semibold", "flex", "items-center", "justify-center", "gap-2", "hover:bg-black", "disabled:opacity-60", "transition-colors", 3, "click", "disabled"], ["diameter", "22", "mode", "indeterminate", 4, "ngIf"], ["mat-button", "", 1, "w-full", "!text-slate-500", 3, "click", "disabled"], ["diameter", "22", "mode", "indeterminate"], [1, "font-bold", "text-center"], [1, "text-xs", "text-center", "text-slate-500", "mb-4"], [1, "space-y-2"], ["mat-stroked-button", "", 1, "w-full", "!h-12", "!justify-start", "!px-4", "!rounded-lg", 3, "click", "disabled"], ["mat-stroked-button", "", 1, "w-full", "!h-12", "!justify-start", "!px-4", "!rounded-lg", "bg-slate-50", "dark:bg-slate-800", 3, "click"], [1, "flex", "flex-col", "items-center", "gap-3", "mb-2"], [1, "w-20", "h-20", "rounded-full", "bg-gradient-to-br", "from-indigo-50", "to-blue-50", "dark:from-indigo-900/20", "dark:to-blue-900/20", "flex", "items-center", "justify-center", "shadow-inner"], [1, "text-indigo-500", "!w-10", "!h-10", "!text-[40px]"], [1, "flex", "items-center", "gap-2", "px-3", "py-1.5", "bg-slate-100", "dark:bg-slate-800", "rounded-full", "border", "border-slate-200", "dark:border-slate-700"], [1, "w-2", "h-2", "rounded-full", "bg-green-500"], [1, "text-xs", "font-mono", "text-slate-600", "dark:text-slate-300"], [1, "text-center", "px-2"], [1, "text-sm", "leading-relaxed", "text-slate-600", "dark:text-slate-400", 3, "innerHTML"], [1, "space-y-3", "pt-2"], ["mat-flat-button", "", "color", "primary", "class", "w-full !h-12 !rounded-lg !text-base shadow-lg shadow-indigo-500/20", 3, "disabled", "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "w-full", "!h-12", "!rounded-lg", "!text-base", "!border-slate-300", "dark:!border-slate-700", "hover:!bg-slate-50", "dark:hover:!bg-slate-800", "transition-colors", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "gap-2"], [1, "!w-5", "!h-5", "!text-[20px]", "text-slate-500"], [1, "text-slate-700", "dark:text-slate-300"], ["class", "text-center", 4, "ngIf"], ["class", "flex justify-center py-2", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", 1, "w-full", "!h-12", "!rounded-lg", "!text-base", "shadow-lg", "shadow-indigo-500/20", 3, "click", "disabled"], [1, "text-center"], [1, "text-xs", "text-amber-600", "dark:text-amber-500"], [1, "flex", "justify-center", "py-2"], ["diameter", "24", "mode", "indeterminate"], [1, "w-12", "h-12", "bg-indigo-100", "dark:bg-indigo-900/30", "rounded-full", "mx-auto", "flex", "items-center", "justify-center", "mb-4"], [1, "text-indigo-600", "dark:text-indigo-400", "!w-6", "!h-6", "!text-[24px]"], [1, "bg-amber-50", "dark:bg-amber-900/20", "border", "border-amber-200", "dark:border-amber-800", "rounded-lg", "p-3"], [1, "flex", "items-start", "gap-2"], [1, "text-amber-600", "dark:text-amber-400", "!w-4", "!h-4", "!text-[16px]", "mt-0.5"], [1, "text-xs", "text-amber-700", "dark:text-amber-300", 3, "innerHTML"], ["type", "password", "inputmode", "numeric", "maxlength", "1", "class", "w-12 h-14 text-center text-2xl font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none", 3, "id", "value", "input", "paste", "keydown", 4, "ngFor", "ngForOf"], ["type", "password", "inputmode", "numeric", "maxlength", "1", 1, "w-12", "h-14", "text-center", "text-2xl", "font-bold", "rounded-lg", "border", "border-slate-300", "dark:border-slate-700", "bg-transparent", "focus:ring-2", "focus:ring-indigo-500", "focus:outline-none", 3, "input", "paste", "keydown", "id", "value"]], template: function AuthModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "h2", 8);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "transloco");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(5, AuthModalComponent_div_5_Template, 3, 2, "div", 9)(6, AuthModalComponent_div_6_Template, 6, 4, "div", 10)(7, AuthModalComponent_div_7_Template, 17, 12, "div", 11)(8, AuthModalComponent_div_8_Template, 26, 18, "div", 11)(9, AuthModalComponent_div_9_Template, 24, 24, "div", 12)(10, AuthModalComponent_div_10_Template, 17, 13, "div", 12)(11, AuthModalComponent_div_11_Template, 19, 16, "div", 11)(12, AuthModalComponent_div_12_Template, 23, 12, "div", 12)(13, AuthModalComponent_div_13_Template, 25, 16, "div", 12);
        \u0275\u0275elementStart(14, "div", 13);
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "transloco");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 11, ctx.state() === "WALLET_ENCRYPT_CHOICE" || ctx.state() === "WALLET_ENCRYPT_PIN" ? "authModal.header.secureWallet" : "authModal.header.login"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.error() || ctx.errorKey());
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "CHOICE");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "EMAIL_INPUT");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "PHONE_INPUT" || ctx.state() === "WHATSAPP_INPUT");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "OTP_VERIFY_EMAIL" || ctx.state() === "OTP_VERIFY_PHONE" || ctx.state() === "OTP_VERIFY_WHATSAPP");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "PASSKEY_ENROLL");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "WALLET_CONNECT");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "WALLET_ENCRYPT_CHOICE");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.state() === "WALLET_ENCRYPT_PIN");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 13, "authModal.footer.protectedBy"), " ");
      }
    }, dependencies: [
      CommonModule,
      NgClass,
      NgForOf,
      NgIf,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatButtonModule,
      MatButton,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatFormFieldModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatSelectModule,
      TranslocoModule,
      TranslocoPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModalComponent, [{
    type: Component,
    args: [{ selector: "auth-modal", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      MatInputModule,
      MatFormFieldModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      TranslocoModule
    ], encapsulation: ViewEncapsulation.None, template: `<div class="w-full max-w-sm mx-auto p-2">\r
  <!-- Header -->\r
  <div class="text-center mb-8">\r
    <!-- Logo or brand -->\r
    <h2 class="text-xl font-bold text-slate-900 dark:text-white">\r
      {{\r
        (state() === 'WALLET_ENCRYPT_CHOICE' || state() === 'WALLET_ENCRYPT_PIN'\r
          ? 'authModal.header.secureWallet'\r
          : 'authModal.header.login'\r
        ) | transloco\r
      }}\r
    </h2>\r
  </div>\r
\r
  <!-- Error Message -->\r
  <div\r
    *ngIf="error() || errorKey()"\r
    class="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm text-center"\r
  >\r
    <span *ngIf="errorKey()">{{ errorKey() | transloco }}</span>\r
    <span *ngIf="!errorKey() && error()">{{ error() }}</span>\r
  </div>\r
\r
  <!-- CHOICE State -->\r
  <div *ngIf="state() === 'CHOICE'" class="space-y-3">\r
    <!-- Only show email/SMS options if user doesn't have Web2 auth -->\r
    <ng-container *ngIf="!hasWeb2Auth()">\r
      <button\r
        mat-stroked-button\r
        class="w-full !h-12 !justify-start !px-4 !rounded-lg !border-slate-300 dark:!border-slate-700"\r
        (click)="startEmailFlow()"\r
      >\r
        <mat-icon class="mr-3 text-slate-500">mail</mat-icon>\r
        <span class="!text-slate-700 dark:!text-slate-200">{{\r
          'authModal.choice.continueEmail' | transloco\r
        }}</span>\r
      </button>\r
\r
      <button\r
        mat-stroked-button\r
        class="w-full !h-12 !justify-start !px-4 !rounded-lg !border-slate-300 dark:!border-slate-700"\r
        (click)="startPhoneFlow()"\r
      >\r
        <mat-icon class="mr-3 text-slate-500">smartphone</mat-icon>\r
        <span class="!text-slate-700 dark:!text-slate-200">{{\r
          'authModal.choice.continueSMS' | transloco\r
        }}</span>\r
      </button>\r
\r
      <button\r
        mat-stroked-button\r
        class="w-full !h-12 !justify-start !px-4 !rounded-lg !border-slate-300 dark:!border-slate-700"\r
        (click)="startWhatsAppFlow()"\r
      >\r
        <mat-icon class="mr-3 text-slate-500">message</mat-icon>\r
        <span class="!text-slate-700 dark:!text-slate-200">{{\r
          'authModal.choice.continueWhatsApp' | transloco\r
        }}</span>\r
      </button>\r
\r
      <div class="relative py-2">\r
        <div class="absolute inset-0 flex items-center">\r
          <div class="w-full border-t border-slate-200 dark:border-slate-700"></div>\r
        </div>\r
        <div class="relative flex justify-center text-xs uppercase">\r
          <span class="bg-white dark:bg-slate-800 px-2 text-slate-500">{{\r
            'authModal.choice.or' | transloco\r
          }}</span>\r
        </div>\r
      </div>\r
    </ng-container>\r
\r
    <!-- Wallet Option -->\r
    <ng-container *ngIf="!connectedWalletAddress(); else connectedWallet">\r
      <button\r
        mat-stroked-button\r
        class="w-full !h-12 !justify-start !px-4 !rounded-lg !border-slate-300 dark:!border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"\r
        (click)="startWalletFlow()"\r
      >\r
        <div class="flex items-center w-full">\r
          <mat-icon class="mr-3 text-slate-500">account_balance_wallet</mat-icon>\r
          <span class="!text-slate-700 dark:!text-slate-200">{{\r
            'authModal.choice.continueWallet' | transloco\r
          }}</span>\r
        </div>\r
      </button>\r
    </ng-container>\r
\r
    <!-- Already Connected Wallet State -->\r
    <ng-template #connectedWallet>\r
      <div\r
        class="w-full h-12 px-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10 flex items-center justify-between cursor-default"\r
      >\r
        <div class="flex items-center gap-3">\r
          <mat-icon class="text-green-600 dark:text-green-400">check_circle</mat-icon>\r
          <div class="flex flex-col">\r
            <span class="text-xs font-semibold text-green-700 dark:text-green-300">{{\r
              'authModal.walletConnected.title' | transloco\r
            }}</span>\r
            <span class="text-[10px] font-mono text-green-600 dark:text-green-400 opacity-80">\r
              {{ connectedWalletAddress()?.substring(0, 6) }}...{{\r
                connectedWalletAddress()?.substring(38)\r
              }}\r
            </span>\r
          </div>\r
        </div>\r
      </div>\r
    </ng-template>\r
\r
    <!-- Only show sign up prompt if user doesn't have Web2 auth -->\r
    <div *ngIf="!hasWeb2Auth()" class="pt-4 text-center">\r
      <span class="text-sm text-slate-500">{{ 'authModal.choice.noAccount' | transloco }}</span>\r
      <a\r
        class="text-sm text-blue-600 font-semibold ml-1 cursor-pointer hover:underline"\r
        href="https://access.verifik.co/sign-up/6332941ccde4f719d9c00f9e"\r
        >{{ 'authModal.choice.signUp' | transloco }}</a\r
      >\r
    </div>\r
  </div>\r
\r
  <!-- EMAIL INPUT State -->\r
  <div *ngIf="state() === 'EMAIL_INPUT'" class="space-y-4">\r
    <!-- Info Message -->\r
    <div\r
      class="p-3 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-lg flex gap-3"\r
    >\r
      <mat-icon class="text-blue-500 !w-5 !h-5 !text-[20px] shrink-0 mt-0.5">info</mat-icon>\r
      <p\r
        class="text-xs !text-blue-700 dark:!text-blue-200 [&_strong]:text-inherit leading-snug"\r
        [innerHTML]="'authModal.emailInput.infoMessage' | transloco"\r
      ></p>\r
    </div>\r
\r
    <div class="relative">\r
      <mat-icon class="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">mail</mat-icon>\r
      <input\r
        [ngModel]="email()"\r
        (ngModelChange)="onEmailChange($event)"\r
        type="email"\r
        [placeholder]="'authModal.emailInput.placeholder' | transloco"\r
        class="w-full pl-10 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"\r
        (keyup.enter)="continueWithEmail()"\r
      />\r
    </div>\r
\r
    <!-- When a passkey exists: Passkey is primary; OTP is secondary -->\r
    <ng-container *ngIf="showPasskeyButton; else emailOtpContinue">\r
      <button\r
        type="button"\r
        class="w-full h-11 rounded-lg bg-slate-900 text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 disabled:opacity-60 transition-colors"\r
        [disabled]="isLoading()"\r
        (click)="signInWithPasskey()"\r
      >\r
        <mat-icon class="!w-5 !h-5 !text-[20px]">fingerprint</mat-icon>\r
        <span>{{ 'authModal.passkey.cta' | transloco }}</span>\r
      </button>\r
      <p class="text-xs text-center text-slate-500">{{ 'authModal.passkey.helper' | transloco }}</p>\r
\r
      <div class="relative py-1">\r
        <div class="absolute inset-0 flex items-center">\r
          <div class="w-full border-t border-slate-200 dark:border-slate-700"></div>\r
        </div>\r
        <div class="relative flex justify-center text-xs uppercase">\r
          <span class="bg-white dark:bg-slate-800 px-2 text-slate-500">{{\r
            'authModal.choice.or' | transloco\r
          }}</span>\r
        </div>\r
      </div>\r
\r
      <button\r
        mat-stroked-button\r
        class="w-full !h-11 !rounded-lg"\r
        [disabled]="isLoading()"\r
        (click)="sendEmailOtp()"\r
      >\r
        <span *ngIf="!isLoading()">{{ 'authModal.passkey.sendCodeInstead' | transloco }}</span>\r
        <mat-progress-spinner\r
          *ngIf="isLoading()"\r
          diameter="20"\r
          mode="indeterminate"\r
        ></mat-progress-spinner>\r
      </button>\r
    </ng-container>\r
\r
    <ng-template #emailOtpContinue>\r
      <button\r
        mat-flat-button\r
        color="primary"\r
        class="w-full !h-11 !rounded-lg"\r
        [disabled]="!isEmailValid || isLoading()"\r
        (click)="continueWithEmail()"\r
      >\r
        <span *ngIf="!isLoading()">{{ 'authModal.emailInput.continue' | transloco }}</span>\r
        <mat-progress-spinner\r
          *ngIf="isLoading()"\r
          diameter="20"\r
          mode="indeterminate"\r
        ></mat-progress-spinner>\r
      </button>\r
    </ng-template>\r
\r
    <button mat-button class="w-full" (click)="setState('CHOICE')">\r
      {{ 'authModal.emailInput.back' | transloco }}\r
    </button>\r
  </div>\r
\r
  <!-- PHONE INPUT State -->\r
  <div *ngIf="state() === 'PHONE_INPUT' || state() === 'WHATSAPP_INPUT'" class="space-y-4">\r
    <!-- Info Message -->\r
    <div\r
      class="p-3 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-lg flex gap-3"\r
    >\r
      <mat-icon class="text-blue-500 !w-5 !h-5 !text-[20px] shrink-0 mt-0.5">info</mat-icon>\r
      <p\r
        class="text-xs !text-blue-700 dark:!text-blue-200 [&_strong]:text-inherit leading-snug"\r
        [innerHTML]="\r
          state() === 'WHATSAPP_INPUT'\r
            ? ('authModal.phoneInput.whatsappInfoMessage' | transloco)\r
            : ('authModal.phoneInput.infoMessage' | transloco)\r
        "\r
      ></p>\r
    </div>\r
\r
    <div class="flex space-x-2">\r
      <!-- Country Code Selector -->\r
      <div class="relative country-selector-container">\r
        <button\r
          #countryButton\r
          type="button"\r
          (click)="toggleCountryDropdown()"\r
          class="w-28 px-3 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"\r
        >\r
          <span class="flex items-center gap-2 text-sm">\r
            <span *ngIf="selectedCountry()">{{ selectedCountry()!.flag }}</span>\r
            <span *ngIf="selectedCountry()" class="font-medium">{{\r
              selectedCountry()!.dialCode\r
            }}</span>\r
            <span *ngIf="!selectedCountry()" class="text-slate-400">{{\r
              'authModal.phoneInput.selectCountry' | transloco\r
            }}</span>\r
          </span>\r
          <mat-icon class="!w-4 !h-4 !text-[16px] text-slate-400">arrow_drop_down</mat-icon>\r
        </button>\r
\r
        <!-- Dropdown Menu -->\r
        <div\r
          *ngIf="isCountryDropdownOpen() && dropdownPosition()"\r
          class="fixed z-[1000] w-80 max-h-80 !bg-white dark:!bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg overflow-hidden"\r
          [style.top]="dropdownPosition()!.top"\r
          [style.left]="dropdownPosition()!.left"\r
        >\r
          <!-- Search Input -->\r
          <div class="p-2 border-b border-slate-200 dark:border-slate-700">\r
            <div class="relative">\r
              <mat-icon\r
                class="absolute left-2 top-1/2 -translate-y-1/2 !w-4 !h-4 !text-[16px] text-slate-400"\r
                >search</mat-icon\r
              >\r
              <input\r
                type="text"\r
                [value]="countrySearchTerm()"\r
                (input)="onCountrySearchChange($any($event.target).value)"\r
                [placeholder]="'authModal.phoneInput.searchCountry' | transloco"\r
                class="w-full pl-8 pr-3 py-2 text-sm rounded-md border border-slate-300 dark:border-slate-600 bg-transparent !text-slate-900 dark:!text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"\r
                (click)="$event.stopPropagation()"\r
              />\r
            </div>\r
          </div>\r
\r
          <!-- Country List -->\r
          <div class="max-h-64 overflow-y-auto">\r
            <button\r
              *ngFor="let country of filteredCountries()"\r
              type="button"\r
              (click)="selectCountry(country)"\r
              class="w-full px-4 py-3 flex items-center gap-3 hover:bg-slate-50 dark:hover:bg-slate-700 text-left transition-colors"\r
              [ngClass]="{\r
                'bg-blue-50 dark:bg-blue-900/20':\r
                  selectedCountry()?.countryCode === country.countryCode\r
              }"\r
            >\r
              <span class="text-2xl">{{ country.flag }}</span>\r
              <div class="flex-1 min-w-0">\r
                <div class="text-sm font-medium !text-slate-900 dark:!text-slate-100 truncate">\r
                  {{ country.name }}\r
                </div>\r
              </div>\r
              <span class="text-sm text-slate-500 dark:text-slate-400 font-medium">\r
                {{ country.dialCode }}\r
              </span>\r
            </button>\r
            <div\r
              *ngIf="filteredCountries().length === 0"\r
              class="px-4 py-3 text-sm text-slate-500 text-center"\r
            >\r
              {{ 'authModal.phoneInput.noCountries' | transloco }}\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Phone Input -->\r
      <input\r
        [ngModel]="phone()"\r
        (input)="onPhoneInput($event)"\r
        type="tel"\r
        [placeholder]="'authModal.phoneInput.phonePlaceholder' | transloco"\r
        class="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent !text-slate-900 dark:!text-slate-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"\r
        (keyup.enter)="continueWithPhone()"\r
      />\r
    </div>\r
\r
    <ng-container *ngIf="showPasskeyButton; else phoneOtpContinue">\r
      <button\r
        type="button"\r
        class="w-full h-11 rounded-lg bg-slate-900 text-white font-semibold flex items-center justify-center gap-2 hover:bg-slate-800 disabled:opacity-60 transition-colors"\r
        [disabled]="isLoading()"\r
        (click)="signInWithPasskey()"\r
      >\r
        <mat-icon class="!w-5 !h-5 !text-[20px]">fingerprint</mat-icon>\r
        <span>{{ 'authModal.passkey.cta' | transloco }}</span>\r
      </button>\r
      <p class="text-xs text-center text-slate-500">{{ 'authModal.passkey.helper' | transloco }}</p>\r
\r
      <div class="relative py-1">\r
        <div class="absolute inset-0 flex items-center">\r
          <div class="w-full border-t border-slate-200 dark:border-slate-700"></div>\r
        </div>\r
        <div class="relative flex justify-center text-xs uppercase">\r
          <span class="bg-white dark:bg-slate-800 px-2 text-slate-500">{{\r
            'authModal.choice.or' | transloco\r
          }}</span>\r
        </div>\r
      </div>\r
\r
      <button\r
        mat-stroked-button\r
        class="w-full !h-11 !rounded-lg"\r
        [disabled]="isLoading()"\r
        (click)="sendPhoneOtp()"\r
      >\r
        <span *ngIf="!isLoading()">{{ 'authModal.passkey.sendCodeInstead' | transloco }}</span>\r
        <mat-progress-spinner\r
          *ngIf="isLoading()"\r
          diameter="20"\r
          mode="indeterminate"\r
        ></mat-progress-spinner>\r
      </button>\r
    </ng-container>\r
\r
    <ng-template #phoneOtpContinue>\r
      <button\r
        mat-flat-button\r
        color="primary"\r
        class="w-full !h-11 !rounded-lg"\r
        [disabled]="!phone() || !selectedCountry() || isLoading()"\r
        (click)="continueWithPhone()"\r
      >\r
        <span *ngIf="!isLoading()">{{ 'authModal.phoneInput.continue' | transloco }}</span>\r
        <mat-progress-spinner\r
          *ngIf="isLoading()"\r
          diameter="20"\r
          mode="indeterminate"\r
        ></mat-progress-spinner>\r
      </button>\r
    </ng-template>\r
\r
    <button mat-button class="w-full" (click)="setState('CHOICE')">\r
      {{ 'authModal.phoneInput.back' | transloco }}\r
    </button>\r
  </div>\r
\r
  <!-- OTP State (Email, Phone, or WhatsApp) -->\r
  <div\r
    *ngIf="\r
      state() === 'OTP_VERIFY_EMAIL' ||\r
      state() === 'OTP_VERIFY_PHONE' ||\r
      state() === 'OTP_VERIFY_WHATSAPP'\r
    "\r
    class="space-y-6"\r
  >\r
    <div class="text-center space-y-2">\r
      <h3 class="font-bold">{{ 'authModal.otpVerify.title' | transloco }}</h3>\r
      <p class="text-sm text-slate-500">\r
        {{\r
          (state() === 'OTP_VERIFY_EMAIL'\r
            ? 'authModal.otpVerify.emailMessage'\r
            : state() === 'OTP_VERIFY_WHATSAPP'\r
              ? 'authModal.otpVerify.whatsappMessage'\r
              : 'authModal.otpVerify.phoneMessage'\r
          ) | transloco: { email: email(), phone: formattedPhoneDestination() }\r
        }}\r
      </p>\r
      <p class="text-xs text-slate-400">{{ 'authModal.otpVerify.ttlHint' | transloco }}</p>\r
      <p\r
        *ngIf="otpExpiresAt()"\r
        class="text-sm font-medium"\r
        [class.text-slate-600]="!isOtpExpired"\r
        [class.dark:text-slate-300]="!isOtpExpired"\r
        [class.text-amber-600]="isOtpExpired"\r
        [class.dark:text-amber-400]="isOtpExpired"\r
      >\r
        <ng-container *ngIf="!isOtpExpired; else otpExpiredLabel">\r
          {{ 'authModal.otpVerify.expiresIn' | transloco: { time: otpExpiryTimeLabel() } }}\r
        </ng-container>\r
        <ng-template #otpExpiredLabel>\r
          {{ 'authModal.otpVerify.expired' | transloco }}\r
        </ng-template>\r
      </p>\r
    </div>\r
\r
    <div class="flex justify-between gap-2">\r
      <input\r
        *ngFor="let digit of otpArray(); let i = index"\r
        [id]="'otp-' + i"\r
        type="text"\r
        inputmode="numeric"\r
        maxlength="1"\r
        autocomplete="one-time-code"\r
        [value]="digit"\r
        [disabled]="isOtpExpired || isLoading()"\r
        (input)="onOtpInput($event, i)"\r
        (paste)="onOtpPaste($event)"\r
        (keydown)="onKeyDown($event, i)"\r
        class="w-12 h-14 text-center text-2xl font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none disabled:opacity-50"\r
      />\r
    </div>\r
\r
    <button\r
      mat-flat-button\r
      color="primary"\r
      class="w-full !h-11 !rounded-lg"\r
      [disabled]="isOtpExpired || otpArray().join('').length !== 6 || isLoading()"\r
      (click)="state() === 'OTP_VERIFY_EMAIL' ? verifyEmailOtp() : verifyPhoneOtp()"\r
    >\r
      <span *ngIf="!isLoading()">{{ 'authModal.otpVerify.verify' | transloco }}</span>\r
      <mat-progress-spinner\r
        *ngIf="isLoading()"\r
        diameter="20"\r
        mode="indeterminate"\r
      ></mat-progress-spinner>\r
    </button>\r
\r
    <button\r
      mat-button\r
      color="primary"\r
      class="w-full"\r
      type="button"\r
      [disabled]="!canResendOtp || isLoading()"\r
      (click)="resendOtp()"\r
    >\r
      <ng-container *ngIf="canResendOtp; else resendCooldown">\r
        {{ 'authModal.otpVerify.resend' | transloco }}\r
      </ng-container>\r
      <ng-template #resendCooldown>\r
        {{ 'authModal.otpVerify.resendIn' | transloco: { time: otpResendCooldownTimeLabel() } }}\r
      </ng-template>\r
    </button>\r
\r
    <button mat-button class="w-full" (click)="setState('CHOICE')">\r
      {{ 'authModal.otpVerify.back' | transloco }}\r
    </button>\r
  </div>\r
\r
  <!-- Passkey enroll (post-OTP) -->\r
  <div *ngIf="state() === 'PASSKEY_ENROLL'" class="space-y-6">\r
    <div class="flex flex-col items-center text-center gap-3">\r
      <div\r
        class="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex items-center justify-center"\r
      >\r
        <mat-icon class="text-blue-600 dark:text-blue-400 !w-8 !h-8 !text-[32px]">fingerprint</mat-icon>\r
      </div>\r
      <h3 class="text-xl font-bold text-slate-900 dark:text-white">\r
        {{ 'authModal.passkey.enrollTitle' | transloco }}\r
      </h3>\r
      <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed px-1">\r
        {{ 'authModal.passkey.enrollDescription' | transloco }}\r
      </p>\r
    </div>\r
\r
    <button\r
      type="button"\r
      class="w-full h-12 rounded-xl bg-slate-900 text-white font-semibold flex items-center justify-center gap-2 hover:bg-black disabled:opacity-60 transition-colors"\r
      [disabled]="isLoading()"\r
      (click)="setupPasskeyEnroll()"\r
    >\r
      <ng-container *ngIf="!isLoading()">\r
        <mat-icon class="!w-5 !h-5 !text-[20px]">fingerprint</mat-icon>\r
        <span>{{ 'authModal.passkey.enrollConfirm' | transloco }}</span>\r
      </ng-container>\r
      <mat-progress-spinner\r
        *ngIf="isLoading()"\r
        diameter="22"\r
        mode="indeterminate"\r
      ></mat-progress-spinner>\r
    </button>\r
\r
    <button\r
      mat-button\r
      class="w-full !text-slate-500"\r
      [disabled]="isLoading()"\r
      (click)="skipPasskeyEnroll()"\r
    >\r
      {{ 'authModal.passkey.enrollSkip' | transloco }}\r
    </button>\r
  </div>\r
\r
  <!-- Wallet State -->\r
  <div *ngIf="state() === 'WALLET_CONNECT'" class="space-y-4">\r
    <h3 class="font-bold text-center">{{ 'authModal.walletConnect.title' | transloco }}</h3>\r
    <p class="text-xs text-center text-slate-500 mb-4">\r
      {{ 'authModal.walletConnect.subtitle' | transloco }}\r
    </p>\r
\r
    <div class="space-y-2">\r
      <!-- <button mat-stroked-button class="w-full !h-12 !justify-start !px-4 !rounded-lg">\r
        <span>{{ 'authModal.walletConnect.zelf' | transloco }}</span>\r
      </button> -->\r
      <button\r
        mat-stroked-button\r
        class="w-full !h-12 !justify-start !px-4 !rounded-lg"\r
        (click)="connectMetaMask()"\r
        [disabled]="isLoading()"\r
      >\r
        <span>{{ 'authModal.walletConnect.metamask' | transloco }}</span>\r
      </button>\r
      <!-- <button mat-stroked-button class="w-full !h-12 !justify-start !px-4 !rounded-lg">\r
        <span>{{ 'authModal.walletConnect.walletConnect' | transloco }}</span>\r
      </button> -->\r
\r
      <!-- Fake Agent Wallet Option -->\r
      <button\r
        mat-stroked-button\r
        class="w-full !h-12 !justify-start !px-4 !rounded-lg bg-slate-50 dark:bg-slate-800"\r
        (click)="createAgentWallet()"\r
      >\r
        <span>{{ 'authModal.walletConnect.createAgent' | transloco }}</span>\r
      </button>\r
    </div>\r
\r
    <button mat-button class="w-full" (click)="handleWalletBack()">\r
      {{ 'authModal.walletConnect.back' | transloco }}\r
    </button>\r
  </div>\r
\r
  <!-- Wallet Encryption Choice State -->\r
  <div *ngIf="state() === 'WALLET_ENCRYPT_CHOICE'" class="space-y-6">\r
    <!-- Wallet Identity Badge -->\r
    <div class="flex flex-col items-center gap-3 mb-2">\r
      <!-- Placeholder Avatar -->\r
      <div\r
        class="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 flex items-center justify-center shadow-inner"\r
      >\r
        <mat-icon class="text-indigo-500 !w-10 !h-10 !text-[40px]">account_balance_wallet</mat-icon>\r
      </div>\r
\r
      <!-- Address Chip -->\r
      <div\r
        class="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700"\r
      >\r
        <span class="w-2 h-2 rounded-full bg-green-500"></span>\r
        <span class="text-xs font-mono text-slate-600 dark:text-slate-300">\r
          {{ tempWalletAddress()?.substring(0, 6) }}...{{ tempWalletAddress()?.substring(38) }}\r
        </span>\r
      </div>\r
    </div>\r
\r
    <!-- Instruction Text -->\r
    <div class="text-center px-2">\r
      <p\r
        class="text-sm leading-relaxed text-slate-600 dark:text-slate-400"\r
        [innerHTML]="'authModal.walletEncrypt.instruction' | transloco"\r
      ></p>\r
    </div>\r
\r
    <!-- Action Buttons -->\r
    <div class="space-y-3 pt-2">\r
      <!-- Passkey Option -->\r
      <button\r
        *ngIf="passkeySupported()"\r
        mat-flat-button\r
        color="primary"\r
        class="w-full !h-12 !rounded-lg !text-base shadow-lg shadow-indigo-500/20"\r
        (click)="encryptWithPasskey()"\r
        [disabled]="isLoading()"\r
      >\r
        <div class="flex items-center justify-center gap-2">\r
          <mat-icon class="!w-5 !h-5 !text-[20px]">fingerprint</mat-icon>\r
          <span>{{ 'authModal.walletEncrypt.createPasskey' | transloco }}</span>\r
        </div>\r
      </button>\r
\r
      <!-- PIN Option -->\r
      <button\r
        mat-stroked-button\r
        class="w-full !h-12 !rounded-lg !text-base !border-slate-300 dark:!border-slate-700 hover:!bg-slate-50 dark:hover:!bg-slate-800 transition-colors"\r
        (click)="usePINInstead()"\r
        [disabled]="isLoading()"\r
      >\r
        <div class="flex items-center justify-center gap-2">\r
          <mat-icon class="!w-5 !h-5 !text-[20px] text-slate-500">pin</mat-icon>\r
          <span class="text-slate-700 dark:text-slate-300">\r
            {{ 'authModal.walletEncrypt.usePIN' | transloco }}\r
          </span>\r
        </div>\r
      </button>\r
    </div>\r
\r
    <!-- Not Supported Warning -->\r
    <div *ngIf="!passkeySupported()" class="text-center">\r
      <p class="text-xs text-amber-600 dark:text-amber-500">\r
        {{ 'authModal.walletEncrypt.notSupported' | transloco }}\r
      </p>\r
    </div>\r
\r
    <!-- Loading -->\r
    <div *ngIf="isLoading()" class="flex justify-center py-2">\r
      <mat-progress-spinner diameter="24" mode="indeterminate"></mat-progress-spinner>\r
    </div>\r
  </div>\r
\r
  <!-- Wallet Encryption PIN State -->\r
  <div *ngIf="state() === 'WALLET_ENCRYPT_PIN'" class="space-y-6">\r
    <div class="text-center space-y-2">\r
      <div\r
        class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mx-auto flex items-center justify-center mb-4"\r
      >\r
        <mat-icon class="text-indigo-600 dark:text-indigo-400 !w-6 !h-6 !text-[24px]">pin</mat-icon>\r
      </div>\r
      <h3 class="font-bold">{{ 'authModal.pinSetup.title' | transloco }}</h3>\r
      <p class="text-sm text-slate-500">\r
        {{ 'authModal.pinSetup.subtitle' | transloco }}\r
      </p>\r
    </div>\r
\r
    <div\r
      class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3"\r
    >\r
      <div class="flex items-start gap-2">\r
        <mat-icon class="text-amber-600 dark:text-amber-400 !w-4 !h-4 !text-[16px] mt-0.5"\r
          >warning</mat-icon\r
        >\r
        <p\r
          class="text-xs text-amber-700 dark:text-amber-300"\r
          [innerHTML]="'authModal.pinSetup.warning' | transloco"\r
        ></p>\r
      </div>\r
    </div>\r
\r
    <div class="flex justify-between gap-2">\r
      <input\r
        *ngFor="let digit of pinArray(); let i = index"\r
        [id]="'pin-' + i"\r
        type="password"\r
        inputmode="numeric"\r
        maxlength="1"\r
        [value]="digit"\r
        (input)="onPinInput($event, i)"\r
        (paste)="onPinPaste($event)"\r
        (keydown)="onPinKeyDown($event, i)"\r
        class="w-12 h-14 text-center text-2xl font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-indigo-500 focus:outline-none"\r
      />\r
    </div>\r
\r
    <button\r
      mat-flat-button\r
      color="primary"\r
      class="w-full !h-11 !rounded-lg"\r
      [disabled]="pinArray().join('').length !== 6 || isLoading()"\r
      (click)="encryptWithPIN()"\r
    >\r
      <span *ngIf="!isLoading()">{{ 'authModal.pinSetup.encryptWallet' | transloco }}</span>\r
      <mat-progress-spinner\r
        *ngIf="isLoading()"\r
        diameter="20"\r
        mode="indeterminate"\r
      ></mat-progress-spinner>\r
    </button>\r
\r
    <button mat-button class="w-full" (click)="setState('WALLET_ENCRYPT_CHOICE')">\r
      {{ 'authModal.pinSetup.back' | transloco }}\r
    </button>\r
  </div>\r
\r
  <div class="mt-8 text-center text-[10px] text-slate-400">\r
    {{ 'authModal.footer.protectedBy' | transloco }}\r
  </div>\r
</div>\r
` }]
  }], () => [], { countryButtonRef: [{
    type: ViewChild,
    args: ["countryButton", { static: false }]
  }], onDocumentClick: [{
    type: HostListener,
    args: ["document:click", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuthModalComponent, { className: "AuthModalComponent", filePath: "src/app/layout/common/auth-modal/auth-modal.component.ts", lineNumber: 71 });
})();

export {
  AuthModalComponent
};
//# sourceMappingURL=chunk-CM2VR6FV.js.map
