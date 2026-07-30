import { Injectable, inject } from '@angular/core';
import { HttpWrapperService } from 'app/core/services/http-wrapper.service';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

export type PhoneGateway = 'whatsapp' | 'sms';

export interface PhoneValidationListParams {
    phoneGateway: PhoneGateway;
    page?: number;
    limit?: number;
    like_phone?: string;
    where_source?: string;
    where_status?: string;
}

export interface ManualPhoneValidationPayload {
    countryCode: string;
    phone: string;
    phoneGateway: PhoneGateway;
    /** Display name in the OTP template (max 15 chars). */
    title?: string;
    language?: string;
}

export interface VerifyPhoneValidationPayload {
    countryCode: string;
    phone: string;
    otp: number;
    phoneGateway?: PhoneGateway;
}

@Injectable({ providedIn: 'root' })
export class PhoneValidationsService {
    private _http = inject(HttpWrapperService);

    private get baseUrl(): string {
        return environment.apiUrl;
    }

    list(params: PhoneValidationListParams): Observable<any> {
        const query: Record<string, unknown> = {
            where_phoneGateway: params.phoneGateway,
            page: params.page ?? 1,
            limit: params.limit ?? 20,
            sort: '-createdAt',
            populates: ['project', 'projectFlow', 'appRegistration'],
            populateSelects:
                '{"project":"name","projectFlow":"type name","appRegistration":"_id"}',
        };

        if (params.like_phone?.trim()) {
            query.like_phone = params.like_phone.trim();
        }

        if (params.where_source) {
            query.where_source = params.where_source;
        }

        if (params.where_status) {
            query.where_status = params.where_status;
        }

        return this._http.sendRequest(
            'get',
            `${this.baseUrl}/v2/phone-validations`,
            query
        );
    }

    getById(id: string): Observable<any> {
        return this._http.sendRequest(
            'get',
            `${this.baseUrl}/v2/phone-validations/${id}`,
            {
                populates: ['project', 'projectFlow', 'appRegistration'],
                populateSelects:
                    '{"project":"name","projectFlow":"type name","appRegistration":"_id"}',
            }
        );
    }

    sendManual(body: ManualPhoneValidationPayload): Observable<any> {
        return this._http.sendRequest(
            'post',
            `${this.baseUrl}/v2/phone-validations/manual`,
            body
        );
    }

    /**
     * Validate a pending OTP for a manual (or filtered) phone validation.
     */
    verify(body: VerifyPhoneValidationPayload): Observable<any> {
        return this._http.sendRequest(
            'put',
            `${this.baseUrl}/v2/phone-validations`,
            body
        );
    }
}
