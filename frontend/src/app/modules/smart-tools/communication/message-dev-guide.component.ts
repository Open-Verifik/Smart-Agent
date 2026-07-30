import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { environment } from 'environments/environment';
import { PhoneGateway } from './phone-validations.service';

export interface LastApiResponse {
    status?: number;
    body: unknown;
    ok: boolean;
    operation?: 'send' | 'verify';
}

@Component({
    selector: 'communication-message-dev-guide',
    standalone: true,
    imports: [
        CommonModule,
        ClipboardModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        TranslocoModule,
    ],
    templateUrl: './message-dev-guide.component.html',
    styleUrls: ['./message-dev-guide.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageDevGuideComponent {
    @Input({ required: true }) phoneGateway!: PhoneGateway;
    @Input() countryCode = '+57';
    @Input() phone = '3001234567';
    @Input() title = 'Company ABC';
    @Input() language = 'en';
    @Input() lastApiResponse: LastApiResponse | null = null;

    private _clipboard = inject(Clipboard);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    private get _docsBase(): string {
        return environment.documentationBaseUrl.replace(/\/$/, '');
    }

    get docsOverviewUrl(): string {
        return `${this._docsBase}/resources/phone-validations/`;
    }

    get docsManualUrl(): string {
        return `${this._docsBase}/resources/create-a-manual-phone-validation/`;
    }

    get docsValidateUrl(): string {
        return `${this._docsBase}/resources/validate-a-phone-validation/`;
    }

    get sendEndpoint(): string {
        return 'POST /v2/phone-validations/manual';
    }

    get verifyEndpoint(): string {
        return 'PUT /v2/phone-validations';
    }

    get samplePhone(): string {
        return this.phone?.trim() || '3001234567';
    }

    get sampleCountryCode(): string {
        return this.countryCode?.trim() || '+57';
    }

    get sampleTitle(): string {
        return this.title?.trim() || 'Company ABC';
    }

    get sendCurl(): string {
        const body = {
            phone: this.samplePhone,
            countryCode: this.sampleCountryCode,
            phoneGateway: this.phoneGateway,
            title: this.sampleTitle,
            language: this.language || 'en',
        };

        return [
            `curl -X POST "https://api.verifik.co/v2/phone-validations/manual" \\`,
            `  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\`,
            `  -H "Content-Type: application/json" \\`,
            `  -d '${JSON.stringify(body)}'`,
        ].join('\n');
    }

    get sendNode(): string {
        return [
            `const response = await fetch("https://api.verifik.co/v2/phone-validations/manual", {`,
            `  method: "POST",`,
            `  headers: {`,
            `    Authorization: "Bearer YOUR_ACCESS_TOKEN",`,
            `    "Content-Type": "application/json",`,
            `  },`,
            `  body: JSON.stringify({`,
            `    phone: "${this.samplePhone}",`,
            `    countryCode: "${this.sampleCountryCode}",`,
            `    phoneGateway: "${this.phoneGateway}",`,
            `    title: "${this.sampleTitle}",`,
            `    language: "${this.language || 'en'}",`,
            `  }),`,
            `});`,
            `const data = await response.json();`,
            `// Success when HTTP 200 and data.data.sent === true`,
        ].join('\n');
    }

    get verifyCurl(): string {
        const body = {
            phone: this.samplePhone,
            countryCode: this.sampleCountryCode,
            otp: 123456,
            phoneGateway: this.phoneGateway,
        };

        return [
            `curl -X PUT "https://api.verifik.co/v2/phone-validations" \\`,
            `  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\`,
            `  -H "Content-Type: application/json" \\`,
            `  -d '${JSON.stringify(body)}'`,
        ].join('\n');
    }

    get verifyNode(): string {
        return [
            `const response = await fetch("https://api.verifik.co/v2/phone-validations", {`,
            `  method: "PUT",`,
            `  headers: {`,
            `    Authorization: "Bearer YOUR_ACCESS_TOKEN",`,
            `    "Content-Type": "application/json",`,
            `  },`,
            `  body: JSON.stringify({`,
            `    phone: "${this.samplePhone}",`,
            `    countryCode: "${this.sampleCountryCode}",`,
            `    otp: 123456,`,
            `    phoneGateway: "${this.phoneGateway}",`,
            `  }),`,
            `});`,
            `const data = await response.json();`,
            `// Success when HTTP 200 and data.data.status === "validated"`,
        ].join('\n');
    }

    get sendSuccessSample(): string {
        const e164Digits = `${this.sampleCountryCode}${this.samplePhone}`.replace(
            /\D/g,
            ''
        );

        const providerConfirmation =
            this.phoneGateway === 'sms'
                ? {
                      sid: 'SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
                      status: 'queued',
                  }
                : {
                      messaging_product: 'whatsapp',
                      contacts: [
                          {
                              input: e164Digits,
                              wa_id: e164Digits,
                          },
                      ],
                      messages: [
                          {
                              id: 'wamid.HBgLMTc4MDkxMzMwODEVAgARGBJCMDVEMDlDRUI0MzUzMjg1N0EA',
                              message_status: 'accepted',
                          },
                      ],
                  };

        return JSON.stringify(
            {
                data: {
                    client: '6a6a80c80dc78d2b350d1cd4',
                    appRegistration: null,
                    source: 'manual',
                    status: 'sent',
                    countryCode: this.sampleCountryCode,
                    phone: this.samplePhone,
                    phoneGateway: this.phoneGateway,
                    otp: 626673,
                    expiresAt: '2026-07-30T00:40:34.000Z',
                    phoneData: {
                        title: this.sampleTitle,
                    },
                    type: 'validation',
                    requires2FA: false,
                    language: this.language || 'en',
                    _id: '6a6a9b2ae233e5e81353f6fe',
                    updatedAt: '2026-07-30T00:30:35.388Z',
                    createdAt: '2026-07-30T00:30:35.388Z',
                    __v: 0,
                    new: true,
                    sent: true,
                    providerConfirmation,
                },
                signature: {
                    dateTime: 'July 30, 2026 12:30 AM',
                    message: 'Certified by Verifik.co',
                },
                id: 'WCGU9',
            },
            null,
            2
        );
    }

    get sendErrorSamples(): string {
        return [
            '// HTTP 403 — not enough credits (checked before send)',
            JSON.stringify(
                { message: 'insufficient_credits', code: 'Forbidden' },
                null,
                2
            ),
            '',
            '// HTTP 409 — OTP already sent within the 2-minute cooldown',
            JSON.stringify(
                { message: 'otp_recently_sent', code: 'Conflict' },
                null,
                2
            ),
            '',
            '// HTTP 409 — provider failed to deliver the message',
            JSON.stringify(
                { message: 'otp_not_sent', code: 'Conflict' },
                null,
                2
            ),
        ].join('\n');
    }

    get verifySuccessSample(): string {
        return JSON.stringify(
            {
                data: {
                    _id: '665f1a2b3c4d5e6f7a8b9c0d',
                    status: 'validated',
                    countryCode: this.sampleCountryCode,
                    phone: this.samplePhone,
                    type: 'validation',
                    showFaceLivenessRecommendation: false,
                },
            },
            null,
            2
        );
    }

    get verifyErrorSamples(): string {
        return [
            '// HTTP 403 — code does not match the pending OTP',
            JSON.stringify(
                { message: 'otp_does_not_match', code: 'Forbidden' },
                null,
                2
            ),
            '',
            '// HTTP 412 — OTP expired (or timed out before verify)',
            JSON.stringify(
                { message: 'phoneValidation_has_expired', code: 'PreconditionFailed' },
                null,
                2
            ),
            '',
            '// HTTP 409 — OTP already verified',
            JSON.stringify(
                {
                    message: 'phone_validation_already_validated',
                    code: 'Conflict',
                },
                null,
                2
            ),
            '',
            '// HTTP 404 — no matching pending OTP for this phone',
            JSON.stringify(
                { message: 'phone_validation_not_found', code: 'NotFound' },
                null,
                2
            ),
        ].join('\n');
    }

    get lastResponseJson(): string {
        if (!this.lastApiResponse) {
            return '';
        }

        try {
            return JSON.stringify(this.lastApiResponse.body, null, 2);
        } catch {
            return String(this.lastApiResponse.body);
        }
    }

    get lastOperationLabel(): string {
        if (!this.lastApiResponse?.operation) {
            return '';
        }

        return this.lastApiResponse.operation === 'verify'
            ? this._transloco.translate(
                  'communication_messages.dev_guide.operation_verify'
              )
            : this._transloco.translate(
                  'communication_messages.dev_guide.operation_send'
              );
    }

    copyText(value: string): void {
        if (!value) {
            return;
        }

        this._clipboard.copy(value);
        this._snack.open(
            this._transloco.translate('communication_messages.dev_guide.copied'),
            undefined,
            { duration: 2000 }
        );
    }
}
