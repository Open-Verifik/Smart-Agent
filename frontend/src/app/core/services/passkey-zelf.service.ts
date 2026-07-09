import { Injectable, inject } from '@angular/core';
import { environment } from 'environments/environment';
import { firstValueFrom } from 'rxjs';
import { HttpWrapperService } from './http-wrapper.service';

@Injectable({
    providedIn: 'root',
})
export class PasskeyZelfService {
    private _httpWrapper = inject(HttpWrapperService);
    private _apiUrl = `${environment.apiUrl}/v2/zelf-key`;

    /**
     * Upload (Create) a Passkey entry in ZelfKey storage.
     * Maps to POST /v2/zelf-key/store/passkeys
     */
    async createPasskey(payload: {
        faceBase64?: string;
        zelfProof?: string;
        publicData: Record<string, unknown>;
        identifier?: string;
        payload?: string;
    }): Promise<unknown> {
        return firstValueFrom(this._httpWrapper.sendRequest('post', `${this._apiUrl}/store/passkeys`, payload));
    }

    /**
     * List Passkeys (Check Existence).
     * Maps to GET /v2/zelf-key/public/list
     */
    async listPasskeys(
        filters: { identifier?: string; email?: string; phone?: string; category?: string } = {},
        fetchEncryptedContent: boolean = false
    ): Promise<{ data?: any[] }> {
        const params: Record<string, string> = {};

        if (filters.identifier) params.identifier = filters.identifier;
        if (filters.email) params.email = filters.email;
        if (filters.phone) params.phone = filters.phone;

        // Contact lookups should not force category=passKeys; identifier/email/phone drive Pinata filters.
        if (filters.category !== undefined) {
            if (filters.category) params.category = filters.category;
        } else if (!filters.identifier && !filters.email && !filters.phone) {
            params.category = 'passKeys';
        }

        const response = await firstValueFrom(
            this._httpWrapper.sendRequest('get', `${this._apiUrl}/public/list`, params)
        );

        if (fetchEncryptedContent && response?.data && Array.isArray(response.data)) {
            for (const passkey of response.data) {
                if (!passkey.url || !this._isPasskeyRecord(passkey)) {
                    continue;
                }

                try {
                    passkey.encryptedContent = await this._fetchEncryptedContent(passkey.url);
                } catch (error) {
                    console.error(
                        '[PasskeyZelfService] Failed to fetch encrypted content from IPFS for passkey:',
                        passkey.publicData?.identifier,
                        error
                    );
                }
            }
        }

        return response;
    }

    /**
     * Email/phone Pinata lists can include appRegistration (and other) pins whose
     * `url` points at a PNG. Only passKeys JSON blobs are decryptable.
     */
    private _isPasskeyRecord(record: { publicData?: Record<string, unknown> }): boolean {
        const type = `${record.publicData?.type || ''}`;
        const category = `${record.publicData?.category || ''}`;
        return type === 'passKeys' || category.endsWith('_passKeys');
    }

    private async _fetchEncryptedContent(url: string): Promise<{ iv?: string; ciphertext?: string }> {
        const res = await fetch(url);
        const contentType = `${res.headers.get('content-type') || ''}`.toLowerCase();

        if (contentType.includes('image/')) {
            throw new Error(`IPFS URL is not JSON (content-type: ${contentType})`);
        }

        const raw = await res.text();
        const trimmed = raw.trim();

        // PNG magic byte 0x89 — gateway sometimes omits/misreports content-type.
        if (!trimmed || trimmed.charCodeAt(0) === 0x89 || trimmed.startsWith('PNG')) {
            throw new Error('IPFS URL returned an image, not passkey JSON');
        }

        const encryptedFile = JSON.parse(trimmed);
        const payloadString = encryptedFile.encryptedToken || encryptedFile;

        return typeof payloadString === 'string' ? JSON.parse(payloadString) : payloadString;
    }
}
