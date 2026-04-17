import {
  MatDialog
} from "./chunk-KCV7S453.js";
import {
  AuthUtils
} from "./chunk-Y5VEUI6L.js";
import {
  Router
} from "./chunk-LHOHCIQM.js";
import {
  BehaviorSubject,
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YTOBX75K.js";
import {
  __async
} from "./chunk-KTESVR3Q.js";

// src/app/core/services/session.service.ts
var SessionService = class _SessionService {
  constructor() {
    this._router = inject(Router);
    this._matDialog = inject(MatDialog);
    this._isLoggingOut = false;
    this._reloadCount = 0;
    this._lastReloadTime = 0;
    this.MAX_RELOADS_PER_MINUTE = 3;
    this.RELOAD_WINDOW_MS = 6e4;
    this._sessionExpired$ = new BehaviorSubject(false);
    this.sessionExpired$ = this._sessionExpired$.asObservable();
    this.RELOAD_TRACKING_KEY = "session_reload_tracking";
    this._loadReloadTracking();
  }
  /**
   * Check if the current access token is valid (exists and not expired)
   */
  isTokenValid() {
    const token = localStorage.getItem("accessToken");
    if (!token || token.trim() === "") {
      return false;
    }
    const isValid = !AuthUtils.isTokenExpired(token);
    if (!isValid) {
      console.warn("[SessionService] Token check failed: Token appears expired");
    }
    return isValid;
  }
  /**
   * Check if user has any valid authentication (Web2 or Web3)
   */
  hasValidAuthentication() {
    if (this.isTokenValid()) {
      return true;
    }
    const walletAddress = localStorage.getItem("x402_agent_address");
    const walletType = localStorage.getItem("x402_wallet_type");
    const hasEncryptedWallet = !!localStorage.getItem("x402_agent_pk_encrypted");
    const hasPlainPk = !!localStorage.getItem("x402_agent_pk");
    if (walletAddress && (walletType === "metamask" || hasEncryptedWallet || hasPlainPk)) {
      return true;
    }
    return false;
  }
  /**
   * Handle session expiration
   * Called when a 401/403 is received or token is detected as expired
   *
   * @param options Configuration options
   * @param options.clearWeb2Only Only clear Web2 credentials (preserve wallet)
   * @param options.silent Don't navigate, just cleanup
   * @param options.showModal Show auth modal instead of redirecting
   */
  handleSessionExpired(options = {}) {
    if (this._isLoggingOut) {
      console.warn("[SessionService] Already handling session expiration, skipping...");
      return;
    }
    this._isLoggingOut = true;
    console.log("[SessionService] Handling session expiration", options);
    this._clearWeb2Credentials();
    if (!options.clearWeb2Only) {
      this._clearWeb3Credentials();
    }
    this._sessionExpired$.next(true);
    this._matDialog.closeAll();
    setTimeout(() => {
      this._isLoggingOut = false;
    }, 1e3);
    if (!options.silent) {
      this._router.navigate(["/"]);
    }
  }
  /**
   * Clear all Web2-related credentials from localStorage
   */
  _clearWeb2Credentials() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("verifik_account");
    localStorage.removeItem("user");
    localStorage.removeItem("currentConversationId");
  }
  /**
   * Clear all Web3-related credentials from localStorage
   */
  _clearWeb3Credentials() {
    localStorage.removeItem("x402_agent_address");
    localStorage.removeItem("x402_agent_pk");
    localStorage.removeItem("x402_agent_pk_encrypted");
    localStorage.removeItem("x402_wallet_type");
    localStorage.removeItem("x402_encryption_method");
    localStorage.removeItem("x402_encryption_salt");
    localStorage.removeItem("x402_credential_id");
    localStorage.removeItem("lastWalletAddress");
  }
  /**
   * Clear all session data (both Web2 and Web3)
   */
  clearAllSessionData() {
    this._clearWeb2Credentials();
    this._clearWeb3Credentials();
    localStorage.removeItem(this.RELOAD_TRACKING_KEY);
  }
  /**
   * Safe reload with loop prevention
   * Tracks reloads and prevents infinite loops
   *
   * @returns true if reload was allowed, false if blocked due to loop detection
   */
  safeReload() {
    const now = Date.now();
    if (now - this._lastReloadTime < this.RELOAD_WINDOW_MS) {
      this._reloadCount++;
    } else {
      this._reloadCount = 1;
    }
    this._lastReloadTime = now;
    this._saveReloadTracking();
    if (this._reloadCount > this.MAX_RELOADS_PER_MINUTE) {
      console.error("[SessionService] Reload loop detected! Stopping reload and clearing session.");
      this.clearAllSessionData();
      this._router.navigate(["/"]);
      return false;
    }
    location.reload();
    return true;
  }
  /**
   * Load reload tracking from localStorage
   */
  _loadReloadTracking() {
    try {
      const tracking = localStorage.getItem(this.RELOAD_TRACKING_KEY);
      if (tracking) {
        const data = JSON.parse(tracking);
        const now = Date.now();
        if (now - data.lastReloadTime < this.RELOAD_WINDOW_MS) {
          this._reloadCount = data.reloadCount;
          this._lastReloadTime = data.lastReloadTime;
          if (this._reloadCount > this.MAX_RELOADS_PER_MINUTE) {
            console.error("[SessionService] Reload loop detected on init! Clearing session.");
            this.clearAllSessionData();
          }
        } else {
          localStorage.removeItem(this.RELOAD_TRACKING_KEY);
        }
      }
    } catch (error) {
      console.warn("[SessionService] Failed to load reload tracking", error);
      localStorage.removeItem(this.RELOAD_TRACKING_KEY);
    }
  }
  /**
   * Save reload tracking to localStorage
   */
  _saveReloadTracking() {
    try {
      localStorage.setItem(this.RELOAD_TRACKING_KEY, JSON.stringify({
        reloadCount: this._reloadCount,
        lastReloadTime: this._lastReloadTime
      }));
    } catch (error) {
      console.warn("[SessionService] Failed to save reload tracking", error);
    }
  }
  /**
   * Reset reload tracking (call after successful login)
   */
  resetReloadTracking() {
    this._reloadCount = 0;
    this._lastReloadTime = 0;
    localStorage.removeItem(this.RELOAD_TRACKING_KEY);
  }
  /**
   * Check if token is about to expire (within 5 minutes)
   * Useful for proactive session refresh
   */
  isTokenExpiringSoon(offsetSeconds = 300) {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      return false;
    }
    return AuthUtils.isTokenExpired(token, -offsetSeconds);
  }
  /**
   * Get time until token expires (in milliseconds)
   * Returns -1 if token is invalid or already expired
   */
  getTokenExpirationTime() {
    const token = localStorage.getItem("accessToken");
    if (!token || token.trim() === "") {
      return -1;
    }
    try {
      const parts = token.split(".");
      if (parts.length !== 3) {
        return -1;
      }
      const payload = JSON.parse(atob(parts[1]));
      if (!payload.exp) {
        return -1;
      }
      const expirationMs = payload.exp * 1e3;
      const now = Date.now();
      if (expirationMs <= now) {
        return -1;
      }
      return expirationMs - now;
    } catch (error) {
      return -1;
    }
  }
  static {
    this.\u0275fac = function SessionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SessionService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SessionService, factory: _SessionService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SessionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// src/app/core/services/wallet-encryption.service.ts
var WalletEncryptionService = class _WalletEncryptionService {
  constructor() {
    this.STORAGE_KEY_ENCRYPTED_PK = "x402_agent_pk_encrypted";
    this.STORAGE_KEY_ENCRYPTION_METHOD = "x402_encryption_method";
    this.STORAGE_KEY_SALT = "x402_encryption_salt";
  }
  /**
   * Check if WebAuthn/Passkeys are supported
   */
  isPasskeysSupported() {
    return __async(this, null, function* () {
      return window.PublicKeyCredential !== void 0 && typeof window.PublicKeyCredential === "function";
    });
  }
  /**
   * Encrypt private key using passkeys (WebAuthn)
   */
  encryptWithPasskeys(privateKey) {
    return __async(this, null, function* () {
      try {
        const challenge = crypto.getRandomValues(new Uint8Array(32));
        const publicKeyCredentialCreationOptions = {
          challenge,
          rp: {
            name: "Smart Agent",
            id: window.location.hostname
          },
          user: {
            id: crypto.getRandomValues(new Uint8Array(16)),
            name: "agent-wallet",
            displayName: "Agent Wallet"
          },
          pubKeyCredParams: [
            { alg: -7, type: "public-key" },
            // ES256
            { alg: -257, type: "public-key" }
            // RS256
          ],
          authenticatorSelection: {
            authenticatorAttachment: "platform",
            requireResidentKey: false,
            userVerification: "required"
          },
          timeout: 6e4,
          attestation: "none"
        };
        const credential = yield navigator.credentials.create({
          publicKey: publicKeyCredentialCreationOptions
        });
        if (!credential) {
          throw new Error("Failed to create credential");
        }
        const credentialId = new Uint8Array(credential.rawId);
        const encryptionKey = yield this.deriveKeyFromCredential(credentialId);
        const encryptedData = yield this.encryptData(privateKey, encryptionKey);
        localStorage.setItem(this.STORAGE_KEY_ENCRYPTED_PK, JSON.stringify(encryptedData));
        localStorage.setItem(this.STORAGE_KEY_ENCRYPTION_METHOD, "passkey");
        localStorage.setItem("x402_credential_id", this.arrayBufferToBase64(credentialId));
        localStorage.removeItem("x402_agent_pk");
        return true;
      } catch (error) {
        console.error("Passkey encryption failed:", error);
        return false;
      }
    });
  }
  /**
   * Decrypt private key using passkeys (WebAuthn)
   */
  decryptWithPasskeys() {
    return __async(this, null, function* () {
      try {
        const encryptedDataStr = localStorage.getItem(this.STORAGE_KEY_ENCRYPTED_PK);
        const credentialIdStr = localStorage.getItem("x402_credential_id");
        if (!encryptedDataStr || !credentialIdStr) {
          throw new Error("No encrypted data found");
        }
        const encryptedData = JSON.parse(encryptedDataStr);
        const credentialId = this.base64ToArrayBuffer(credentialIdStr);
        const challenge = crypto.getRandomValues(new Uint8Array(32));
        const publicKeyCredentialRequestOptions = {
          challenge,
          allowCredentials: [
            {
              id: credentialId,
              type: "public-key",
              transports: ["internal"]
            }
          ],
          timeout: 6e4,
          userVerification: "required"
        };
        const assertion = yield navigator.credentials.get({
          publicKey: publicKeyCredentialRequestOptions
        });
        if (!assertion) {
          throw new Error("Authentication failed");
        }
        const encryptionKey = yield this.deriveKeyFromCredential(new Uint8Array(credentialId));
        const privateKey = yield this.decryptData(encryptedData, encryptionKey);
        return privateKey;
      } catch (error) {
        console.error("Passkey decryption failed:", error);
        return null;
      }
    });
  }
  /**
   * Encrypt private key using PIN (fallback method)
   */
  encryptWithPIN(privateKey, pin) {
    return __async(this, null, function* () {
      try {
        if (!/^\d{6}$/.test(pin)) {
          throw new Error("PIN must be 6 digits");
        }
        const salt = crypto.getRandomValues(new Uint8Array(16));
        const encryptionKey = yield this.deriveKeyFromPIN(pin, salt);
        const encryptedData = yield this.encryptData(privateKey, encryptionKey);
        localStorage.setItem(this.STORAGE_KEY_ENCRYPTED_PK, JSON.stringify(encryptedData));
        localStorage.setItem(this.STORAGE_KEY_ENCRYPTION_METHOD, "pin");
        localStorage.setItem(this.STORAGE_KEY_SALT, this.arrayBufferToBase64(salt));
        localStorage.removeItem("x402_agent_pk");
        return true;
      } catch (error) {
        console.error("PIN encryption failed:", error);
        return false;
      }
    });
  }
  /**
   * Decrypt private key using PIN
   */
  decryptWithPIN(pin) {
    return __async(this, null, function* () {
      try {
        const encryptedDataStr = localStorage.getItem(this.STORAGE_KEY_ENCRYPTED_PK);
        const saltStr = localStorage.getItem(this.STORAGE_KEY_SALT);
        if (!encryptedDataStr || !saltStr) {
          throw new Error("No encrypted data found");
        }
        const encryptedData = JSON.parse(encryptedDataStr);
        const salt = this.base64ToArrayBuffer(saltStr);
        const encryptionKey = yield this.deriveKeyFromPIN(pin, new Uint8Array(salt));
        const privateKey = yield this.decryptData(encryptedData, encryptionKey);
        return privateKey;
      } catch (error) {
        console.error("PIN decryption failed:", error);
        return null;
      }
    });
  }
  /**
   * Get the current encryption method
   */
  getEncryptionMethod() {
    return localStorage.getItem(this.STORAGE_KEY_ENCRYPTION_METHOD);
  }
  /**
   * Check if wallet is encrypted
   */
  isWalletEncrypted() {
    return !!localStorage.getItem(this.STORAGE_KEY_ENCRYPTED_PK);
  }
  /**
   * Derive encryption key from credential ID
   */
  deriveKeyFromCredential(credentialId) {
    return __async(this, null, function* () {
      const keyMaterial = yield crypto.subtle.importKey("raw", credentialId, { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
      const key = yield crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt: new Uint8Array([
          // Static salt for credential-based encryption
          115,
          109,
          97,
          114,
          116,
          45,
          97,
          103,
          101,
          110,
          116,
          45,
          119,
          97,
          108,
          108
        ]),
        iterations: 1e5,
        hash: "SHA-256"
      }, keyMaterial, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
      return key;
    });
  }
  /**
   * Derive encryption key from PIN
   */
  deriveKeyFromPIN(pin, salt) {
    return __async(this, null, function* () {
      const encoder = new TextEncoder();
      const pinBuffer = encoder.encode(pin);
      const keyMaterial = yield crypto.subtle.importKey("raw", pinBuffer, { name: "PBKDF2" }, false, ["deriveBits", "deriveKey"]);
      const key = yield crypto.subtle.deriveKey({
        name: "PBKDF2",
        salt,
        iterations: 1e5,
        hash: "SHA-256"
      }, keyMaterial, { name: "AES-GCM", length: 256 }, false, ["encrypt", "decrypt"]);
      return key;
    });
  }
  /**
   * Encrypt data using AES-GCM
   */
  encryptData(data, key) {
    return __async(this, null, function* () {
      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(data);
      const iv = crypto.getRandomValues(new Uint8Array(12));
      const ciphertext = yield crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, dataBuffer);
      return {
        iv: this.arrayBufferToBase64(iv),
        ciphertext: this.arrayBufferToBase64(new Uint8Array(ciphertext))
      };
    });
  }
  /**
   * Decrypt data using AES-GCM
   */
  decryptData(encryptedData, key) {
    return __async(this, null, function* () {
      const iv = this.base64ToArrayBuffer(encryptedData.iv);
      const ciphertext = this.base64ToArrayBuffer(encryptedData.ciphertext);
      const decrypted = yield crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
      const decoder = new TextDecoder();
      return decoder.decode(decrypted);
    });
  }
  /**
   * Convert ArrayBuffer to Base64
   */
  arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
  /**
   * Convert Base64 to ArrayBuffer
   */
  base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }
  /**
   * Clear all encryption data (for sign out)
   */
  clearEncryptionData() {
    localStorage.removeItem(this.STORAGE_KEY_ENCRYPTED_PK);
    localStorage.removeItem(this.STORAGE_KEY_ENCRYPTION_METHOD);
    localStorage.removeItem(this.STORAGE_KEY_SALT);
    localStorage.removeItem("x402_credential_id");
    localStorage.removeItem("x402_agent_pk");
  }
  static {
    this.\u0275fac = function WalletEncryptionService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _WalletEncryptionService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _WalletEncryptionService, factory: _WalletEncryptionService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WalletEncryptionService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  SessionService,
  WalletEncryptionService
};
//# sourceMappingURL=chunk-OVR3OJIF.js.map
