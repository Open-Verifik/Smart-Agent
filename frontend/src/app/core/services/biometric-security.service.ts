import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class BiometricSecurityService {
    /**
     * Checks if the browser supports WebAuthn/Passkeys.
     */
    async isPasskeySupported(): Promise<boolean> {
        return (
            typeof PublicKeyCredential !== 'undefined' &&
            typeof PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable === 'function' &&
            (await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable())
        );
    }

    /**
     * Registers a new Passkey for biometric authentication.
     */
    async registerPasskey(username: string, userId: Uint8Array): Promise<{ credentialId: string }> {
        const challenge = crypto.getRandomValues(new Uint8Array(32));

        const publicKey: PublicKeyCredentialCreationOptions = {
            challenge,
            rp: {
                name: 'Verifik',
                id: window.location.hostname,
            },
            user: {
                id: userId as BufferSource,
                name: username,
                displayName: username,
            },
            pubKeyCredParams: [
                { alg: -7, type: 'public-key' },
                { alg: -257, type: 'public-key' },
            ],
            authenticatorSelection: {
                authenticatorAttachment: 'platform',
                userVerification: 'required',
                requireResidentKey: true,
            },
            timeout: 60000,
            attestation: 'none',
        };

        const credential = (await navigator.credentials.create({
            publicKey,
        })) as PublicKeyCredential | null;

        if (!credential) {
            throw new Error('Passkey registration failed');
        }

        return {
            credentialId: credential.id,
        };
    }

    /**
     * Authenticates via Passkey (biometric verification).
     */
    async authenticatePasskey(credentialIds: string[] = []): Promise<{ credentialId: string }> {
        const challenge = crypto.getRandomValues(new Uint8Array(32));

        const publicKey: PublicKeyCredentialRequestOptions = {
            challenge,
            rpId: window.location.hostname,
            userVerification: 'required',
            timeout: 60000,
        };

        if (credentialIds.length > 0) {
            publicKey.allowCredentials = credentialIds.map((id) => ({
                id: this.base64ToUint8Array(id) as BufferSource,
                type: 'public-key',
            }));
        }

        const credential = (await navigator.credentials.get({
            publicKey,
        })) as PublicKeyCredential | null;

        if (!credential) {
            throw new Error('Passkey authentication failed');
        }

        return {
            credentialId: credential.id,
        };
    }

    /**
     * Derives an encryption key from a stable subject (clientId for login passkeys).
     */
    async deriveEncryptionKey(subject: string): Promise<CryptoKey> {
        const salt = new TextEncoder().encode('Verifik_Passkey_Salt_v1');
        const subjectBytes = new TextEncoder().encode(subject);

        const keyMaterial = await crypto.subtle.importKey('raw', subjectBytes, { name: 'PBKDF2' }, false, [
            'deriveBits',
            'deriveKey',
        ]);

        return await crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt,
                iterations: 100000,
                hash: 'SHA-256',
            },
            keyMaterial,
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt', 'decrypt']
        );
    }

    async encryptData(key: CryptoKey, data: string): Promise<{ ciphertext: string; iv: string }> {
        const encodedData = new TextEncoder().encode(data);
        const iv = crypto.getRandomValues(new Uint8Array(12));

        const encrypted = await crypto.subtle.encrypt(
            {
                name: 'AES-GCM',
                iv,
            },
            key,
            encodedData
        );

        return {
            ciphertext: this.arrayBufferToBase64(encrypted),
            iv: this.arrayBufferToBase64(iv),
        };
    }

    async decryptData(key: CryptoKey, ciphertext: string, iv: string): Promise<string> {
        const ciphertextBytes = this.base64ToUint8Array(ciphertext);
        const ivBytes = this.base64ToUint8Array(iv);

        const decrypted = await crypto.subtle.decrypt(
            {
                name: 'AES-GCM',
                iv: ivBytes,
            },
            key,
            ciphertextBytes
        );

        return new TextDecoder().decode(decrypted);
    }

    private arrayBufferToBase64(buffer: ArrayBuffer): string {
        const bytes = new Uint8Array(buffer);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return btoa(binary);
    }

    private base64ToUint8Array(base64: string): Uint8Array {
        const base64Standard = base64.replace(/-/g, '+').replace(/_/g, '/');
        const binary = atob(base64Standard);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
            bytes[i] = binary.charCodeAt(i);
        }
        return bytes;
    }
}
