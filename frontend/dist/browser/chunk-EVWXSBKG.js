// src/app/core/auth/auth.utils.ts
var AuthUtils = class {
  static {
    this.ACCESS_TOKEN_EXPIRES_AT_KEY = "accessTokenExpiresAt";
  }
  /**
   * Parsed JWT payload, or null if the string is not a decodable JWT.
   */
  static getJwtPayload(token) {
    if (!token || token.trim() === "" || token.split(".").length !== 3) {
      return null;
    }
    try {
      return this._decodeToken(token);
    } catch {
      return null;
    }
  }
  /**
   * Expiration from the Verifik expiresAt claim, then the standard exp claim.
   */
  static getTokenExpirationDate(token) {
    if (!token || token.trim() === "" || token.split(".").length !== 3) {
      return null;
    }
    try {
      return this._getTokenExpirationDate(token);
    } catch {
      return null;
    }
  }
  /**
   * Writes the session JWT and the expiry date beside it.
   */
  static storeAccessToken(token) {
    localStorage.setItem("accessToken", token);
    const expiresAt = this.getTokenExpirationDate(token);
    if (!expiresAt) {
      localStorage.removeItem(this.ACCESS_TOKEN_EXPIRES_AT_KEY);
      return;
    }
    localStorage.setItem(this.ACCESS_TOKEN_EXPIRES_AT_KEY, expiresAt.toISOString());
  }
  /**
   * True when the stored expiry date is still ahead of now.
   * A token with no readable date is kept, so a refresh does not replace it.
   */
  static accessTokenStillValid(token) {
    const expiresAt = this.getTokenExpirationDate(token);
    if (!expiresAt)
      return true;
    return expiresAt.getTime() > Date.now();
  }
  /**
   * Is token expired?
   *
   * @param token
   * @param offsetSeconds
   */
  static isTokenExpired(token, offsetSeconds) {
    if (!token || token === "" || token.trim() === "") {
      return true;
    }
    if (token.split(".").length !== 3) {
      return true;
    }
    let date = null;
    try {
      date = this._getTokenExpirationDate(token);
    } catch (error) {
      console.warn("Failed to decode token:", error);
      return true;
    }
    offsetSeconds = offsetSeconds || 0;
    if (date === null) {
      return false;
    }
    return !(date.valueOf() > (/* @__PURE__ */ new Date()).valueOf() + offsetSeconds * 1e3);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Base64 decoder
   * Credits: https://github.com/atk
   *
   * @param str
   * @private
   */
  static _b64decode(str) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    let output = "";
    str = String(str).replace(/=+$/, "");
    if (str.length % 4 === 1) {
      throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (
      let bc = 0, bs, buffer, idx = 0;
      // get next character
      buffer = str.charAt(idx++);
      // character found in table? initialize bit storage and add its ascii value;
      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, // and if not first of each 4 characters,
      // convert the first 8 bits to one ascii character
      bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      buffer = chars.indexOf(buffer);
    }
    return output;
  }
  /**
   * Base64 unicode decoder
   *
   * @param str
   * @private
   */
  static _b64DecodeUnicode(str) {
    return decodeURIComponent(Array.prototype.map.call(this._b64decode(str), (c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2)).join(""));
  }
  /**
   * URL Base 64 decoder
   *
   * @param str
   * @private
   */
  static _urlBase64Decode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch (output.length % 4) {
      case 0: {
        break;
      }
      case 2: {
        output += "==";
        break;
      }
      case 3: {
        output += "=";
        break;
      }
      default: {
        throw Error("Illegal base64url string!");
      }
    }
    return this._b64DecodeUnicode(output);
  }
  /**
   * Decode token
   *
   * @param token
   * @private
   */
  static _decodeToken(token) {
    if (!token) {
      return null;
    }
    const parts = token.split(".");
    if (parts.length !== 3) {
      throw new Error("The inspected token doesn't appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.");
    }
    const decoded = this._urlBase64Decode(parts[1]);
    if (!decoded) {
      throw new Error("Cannot decode the token.");
    }
    return JSON.parse(decoded);
  }
  /**
   * Get token expiration date
   *
   * @param token
   * @private
   */
  static _getTokenExpirationDate(token) {
    const decodedToken = this._decodeToken(token);
    const rawExpiration = decodedToken?.expiresAt ?? decodedToken?.exp;
    if (rawExpiration === void 0 || rawExpiration === null || rawExpiration === "") {
      return null;
    }
    const expiration = Number(rawExpiration);
    if (!Number.isFinite(expiration) || expiration <= 0) {
      return null;
    }
    const milliseconds = expiration > 1e12 ? expiration : expiration * 1e3;
    const date = new Date(milliseconds);
    return Number.isNaN(date.getTime()) ? null : date;
  }
};

export {
  AuthUtils
};
//# sourceMappingURL=chunk-EVWXSBKG.js.map
