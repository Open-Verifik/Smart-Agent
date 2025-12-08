import { Injectable } from '@angular/core';

/**
 * Service for encrypting and decrypting wallet private keys
 * Uses WebAuthn/Passkeys when available, falls back to PIN-based encryption
 */
@Injectable({
  providedIn: 'root',
})
export class WalletEncryptionService {
  private readonly STORAGE_KEY_ENCRYPTED_PK = 'x402_agent_pk_encrypted';
  private readonly STORAGE_KEY_ENCRYPTION_METHOD = 'x402_encryption_method';
  private readonly STORAGE_KEY_SALT = 'x402_encryption_salt';

  constructor() {}

  /**
   * Check if WebAuthn/Passkeys are supported
   */
  async isPasskeysSupported(): Promise<boolean> {
    return (
      window.PublicKeyCredential !== undefined && typeof window.PublicKeyCredential === 'function'
    );
  }

  /**
   * Encrypt private key using passkeys (WebAuthn)
   */
  async encryptWithPasskeys(privateKey: string): Promise<boolean> {
    try {
      // Generate a random challenge
      const challenge = crypto.getRandomValues(new Uint8Array(32));

      // Create credential options
      const publicKeyCredentialCreationOptions: PublicKeyCredentialCreationOptions = {
        challenge,
        rp: {
          name: 'Smart Agent',
          id: window.location.hostname,
        },
        user: {
          id: crypto.getRandomValues(new Uint8Array(16)),
          name: 'agent-wallet',
          displayName: 'Agent Wallet',
        },
        pubKeyCredParams: [
          { alg: -7, type: 'public-key' }, // ES256
          { alg: -257, type: 'public-key' }, // RS256
        ],
        authenticatorSelection: {
          authenticatorAttachment: 'platform',
          requireResidentKey: false,
          userVerification: 'required',
        },
        timeout: 60000,
        attestation: 'none',
      };

      // Create credential
      const credential = (await navigator.credentials.create({
        publicKey: publicKeyCredentialCreationOptions,
      })) as PublicKeyCredential;

      if (!credential) {
        throw new Error('Failed to create credential');
      }

      // Use the credential ID as encryption key material
      const credentialId = new Uint8Array(credential.rawId);

      // Derive encryption key from credential
      const encryptionKey = await this.deriveKeyFromCredential(credentialId);

      // Encrypt the private key
      const encryptedData = await this.encryptData(privateKey, encryptionKey);

      // Store encrypted data and credential ID
      localStorage.setItem(this.STORAGE_KEY_ENCRYPTED_PK, JSON.stringify(encryptedData));
      localStorage.setItem(this.STORAGE_KEY_ENCRYPTION_METHOD, 'passkey');
      localStorage.setItem('x402_credential_id', this.arrayBufferToBase64(credentialId));

      // Remove plain text private key if it exists
      localStorage.removeItem('x402_agent_pk');

      return true;
    } catch (error) {
      console.error('Passkey encryption failed:', error);
      return false;
    }
  }

  /**
   * Decrypt private key using passkeys (WebAuthn)
   */
  async decryptWithPasskeys(): Promise<string | null> {
    try {
      const encryptedDataStr = localStorage.getItem(this.STORAGE_KEY_ENCRYPTED_PK);
      const credentialIdStr = localStorage.getItem('x402_credential_id');

      if (!encryptedDataStr || !credentialIdStr) {
        throw new Error('No encrypted data found');
      }

      const encryptedData = JSON.parse(encryptedDataStr);
      const credentialId = this.base64ToArrayBuffer(credentialIdStr);

      // Generate a random challenge for authentication
      const challenge = crypto.getRandomValues(new Uint8Array(32));

      // Get credential options
      const publicKeyCredentialRequestOptions: PublicKeyCredentialRequestOptions = {
        challenge,
        allowCredentials: [
          {
            id: credentialId,
            type: 'public-key',
            transports: ['internal'],
          },
        ],
        timeout: 60000,
        userVerification: 'required',
      };

      // Get credential (this will trigger biometric/PIN prompt)
      const assertion = (await navigator.credentials.get({
        publicKey: publicKeyCredentialRequestOptions,
      })) as PublicKeyCredential;

      if (!assertion) {
        throw new Error('Authentication failed');
      }

      // Derive the same encryption key
      const encryptionKey = await this.deriveKeyFromCredential(new Uint8Array(credentialId));

      // Decrypt the private key
      const privateKey = await this.decryptData(encryptedData, encryptionKey);

      return privateKey;
    } catch (error) {
      console.error('Passkey decryption failed:', error);
      return null;
    }
  }

  /**
   * Encrypt private key using PIN (fallback method)
   */
  async encryptWithPIN(privateKey: string, pin: string): Promise<boolean> {
    try {
      // Validate PIN (6 digits)
      if (!/^\d{6}$/.test(pin)) {
        throw new Error('PIN must be 6 digits');
      }

      // Generate a random salt
      const salt = crypto.getRandomValues(new Uint8Array(16));

      // Derive encryption key from PIN
      const encryptionKey = await this.deriveKeyFromPIN(pin, salt);

      // Encrypt the private key
      const encryptedData = await this.encryptData(privateKey, encryptionKey);

      // Store encrypted data, salt, and method
      localStorage.setItem(this.STORAGE_KEY_ENCRYPTED_PK, JSON.stringify(encryptedData));
      localStorage.setItem(this.STORAGE_KEY_ENCRYPTION_METHOD, 'pin');
      localStorage.setItem(this.STORAGE_KEY_SALT, this.arrayBufferToBase64(salt));

      // Remove plain text private key if it exists
      localStorage.removeItem('x402_agent_pk');

      return true;
    } catch (error) {
      console.error('PIN encryption failed:', error);
      return false;
    }
  }

  /**
   * Decrypt private key using PIN
   */
  async decryptWithPIN(pin: string): Promise<string | null> {
    try {
      const encryptedDataStr = localStorage.getItem(this.STORAGE_KEY_ENCRYPTED_PK);
      const saltStr = localStorage.getItem(this.STORAGE_KEY_SALT);

      if (!encryptedDataStr || !saltStr) {
        throw new Error('No encrypted data found');
      }

      const encryptedData = JSON.parse(encryptedDataStr);
      const salt = this.base64ToArrayBuffer(saltStr);

      // Derive the same encryption key from PIN
      const encryptionKey = await this.deriveKeyFromPIN(pin, new Uint8Array(salt));

      // Decrypt the private key
      const privateKey = await this.decryptData(encryptedData, encryptionKey);

      return privateKey;
    } catch (error) {
      console.error('PIN decryption failed:', error);
      return null;
    }
  }

  /**
   * Get the current encryption method
   */
  getEncryptionMethod(): 'passkey' | 'pin' | null {
    return localStorage.getItem(this.STORAGE_KEY_ENCRYPTION_METHOD) as 'passkey' | 'pin' | null;
  }

  /**
   * Check if wallet is encrypted
   */
  isWalletEncrypted(): boolean {
    return !!localStorage.getItem(this.STORAGE_KEY_ENCRYPTED_PK);
  }

  /**
   * Derive encryption key from credential ID
   */
  private async deriveKeyFromCredential(credentialId: Uint8Array): Promise<CryptoKey> {
    // Import the credential ID as key material
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      credentialId as BufferSource,
      { name: 'PBKDF2' },
      false,
      ['deriveBits', 'deriveKey'],
    );

    // Derive AES-GCM key
    const key = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: new Uint8Array([
          // Static salt for credential-based encryption
          0x73, 0x6d, 0x61, 0x72, 0x74, 0x2d, 0x61, 0x67, 0x65, 0x6e, 0x74, 0x2d, 0x77, 0x61, 0x6c,
          0x6c,
        ]),
        iterations: 100000,
        hash: 'SHA-256',
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt'],
    );

    return key;
  }

  /**
   * Derive encryption key from PIN
   */
  private async deriveKeyFromPIN(pin: string, salt: Uint8Array): Promise<CryptoKey> {
    // Convert PIN to ArrayBuffer
    const encoder = new TextEncoder();
    const pinBuffer = encoder.encode(pin);

    // Import PIN as key material
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      pinBuffer as BufferSource,
      { name: 'PBKDF2' },
      false,
      ['deriveBits', 'deriveKey'],
    );

    // Derive AES-GCM key with high iteration count for security
    const key = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt as BufferSource,
        iterations: 100000,
        hash: 'SHA-256',
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt'],
    );

    return key;
  }

  /**
   * Encrypt data using AES-GCM
   */
  private async encryptData(
    data: string,
    key: CryptoKey,
  ): Promise<{ iv: string; ciphertext: string }> {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);

    // Generate random IV
    const iv = crypto.getRandomValues(new Uint8Array(12));

    // Encrypt
    const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, dataBuffer);

    return {
      iv: this.arrayBufferToBase64(iv),
      ciphertext: this.arrayBufferToBase64(new Uint8Array(ciphertext)),
    };
  }

  /**
   * Decrypt data using AES-GCM
   */
  private async decryptData(
    encryptedData: { iv: string; ciphertext: string },
    key: CryptoKey,
  ): Promise<string> {
    const iv = this.base64ToArrayBuffer(encryptedData.iv);
    const ciphertext = this.base64ToArrayBuffer(encryptedData.ciphertext);

    // Decrypt
    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ciphertext);

    const decoder = new TextDecoder();
    return decoder.decode(decrypted);
  }

  /**
   * Convert ArrayBuffer to Base64
   */
  private arrayBufferToBase64(buffer: Uint8Array | ArrayBuffer): string {
    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  /**
   * Convert Base64 to ArrayBuffer
   */
  private base64ToArrayBuffer(base64: string): ArrayBuffer {
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
  clearEncryptionData(): void {
    localStorage.removeItem(this.STORAGE_KEY_ENCRYPTED_PK);
    localStorage.removeItem(this.STORAGE_KEY_ENCRYPTION_METHOD);
    localStorage.removeItem(this.STORAGE_KEY_SALT);
    localStorage.removeItem('x402_credential_id');
    localStorage.removeItem('x402_agent_pk');
  }
}
