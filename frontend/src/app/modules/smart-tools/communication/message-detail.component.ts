import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import {
    MASKED_OTP,
    buildOtpPreviewBody,
    formatMessagePhone,
    resolveMessageSource,
    resolveSenderTitle,
} from './message-preview.util';
import {
    PhoneGateway,
    PhoneValidationsService,
} from './phone-validations.service';

@Component({
    selector: 'communication-message-detail',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        TranslocoModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
    ],
    templateUrl: './message-detail.component.html',
    styleUrls: ['./message-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageDetailComponent implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _service = inject(PhoneValidationsService);
    private _cdr = inject(ChangeDetectorRef);
    private _snack = inject(MatSnackBar);
    private _transloco = inject(TranslocoService);

    phoneGateway: PhoneGateway = 'whatsapp';
    loading = true;
    record: any = null;
    maskedOtp = MASKED_OTP;

    ngOnInit(): void {
        this.phoneGateway =
            (this._route.snapshot.data['phoneGateway'] as PhoneGateway) ||
            'whatsapp';

        const id = this._route.snapshot.paramMap.get('id');

        if (!id) {
            this.goBack();
            return;
        }

        this._service.getById(id).subscribe({
            next: (response) => {
                this.record = response?.data || null;
                this.loading = false;
                this._cdr.markForCheck();
            },
            error: () => {
                this.loading = false;
                this.record = null;
                this._cdr.markForCheck();
                this._snack.open(
                    this._transloco.translate(
                        'communication_messages.detail.load_error'
                    ),
                    undefined,
                    { duration: 3000 }
                );
            },
        });
    }

    get listLink(): string {
        return this.phoneGateway === 'sms'
            ? '/smart-tools/sms-messages'
            : '/smart-tools/whatsapp-messages';
    }

    get titleKey(): string {
        return this.phoneGateway === 'sms'
            ? 'communication_messages.detail.title_sms'
            : 'communication_messages.detail.title_whatsapp';
    }

    get senderName(): string {
        return resolveSenderTitle(this.record);
    }

    get previewPhone(): string {
        return formatMessagePhone(this.record) || '—';
    }

    get previewBody(): string {
        return buildOtpPreviewBody(
            this.record?.phoneGateway || this.phoneGateway,
            this.senderName,
            this.record?.language || 'en',
            this.maskedOtp
        );
    }

    get sourceKey(): string {
        return (
            'communication_messages.list.source.' +
            resolveMessageSource(this.record)
        );
    }

    get projectLabel(): string {
        return this.record?.project?.name || '—';
    }

    goBack(): void {
        this._router.navigateByUrl(this.listLink);
    }
}
