// src/app/core/auth/auth.utils.ts
var AuthUtils = class {
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Is token expired?
   *
   * @param token
   * @param offsetSeconds
   */
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
    if (!decodedToken.hasOwnProperty("exp")) {
      return null;
    }
    const date = /* @__PURE__ */ new Date(0);
    date.setUTCSeconds(decodedToken.exp);
    return date;
  }
};

export {
  AuthUtils
};
//# sourceMappingURL=chunk-Y5VEUI6L.js.map
