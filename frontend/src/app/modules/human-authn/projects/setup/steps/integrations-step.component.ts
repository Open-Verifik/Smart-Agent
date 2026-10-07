import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';
import { HumanAuthnSetupService } from '../human-authn-setup.service';

@Component({
    selector: 'human-authn-integrations-step',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        RouterLink,
        TranslocoModule,
    ],
    templateUrl: './integrations-step.component.html',
    styleUrl: './integrations-step.component.scss',
})
export class HumanAuthnIntegrationsStepComponent implements OnInit {
    @Input() form!: FormGroup;
    private _setup = inject(HumanAuthnSetupService);
    webhooks: { _id: string; name?: string }[] = [];

    ngOnInit(): void {
        this._setup.getWebhooks().subscribe({
            next: (res) => {
                this.webhooks = res?.data ?? [];
            },
        });
    }

    get redirectControl(): AbstractControl | null {
        return this.form?.get('projectFlow.integrations.redirectUrl') ?? null;
    }

    get webhookId(): string | null {
        return this.form?.get('projectFlow.integrations.webhook')?.value || null;
    }

    get hasWebhook(): boolean {
        return !!this.webhookId;
    }

    get redirectHost(): string | null {
        const value = `${this.redirectControl?.value || ''}`.trim();
        if (!value || this.redirectControl?.invalid) return null;

        try {
            return new URL(value).host;
        } catch {
            return null;
        }
    }

    get selectedWebhookName(): string {
        const match = this.webhooks.find((webhook) => webhook._id === this.webhookId);
        return match?.name || match?._id || this.webhookId || '';
    }
}
