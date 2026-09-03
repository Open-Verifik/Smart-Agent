import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
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
        MatInputModule,
        MatSelectModule,
        RouterLink,
        TranslocoModule,
    ],
    template: `
        <ng-container *transloco="let t" [formGroup]="form">
            <div class="flex flex-col gap-4" formGroupName="projectFlow">
                <div class="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6" formGroupName="integrations">
                    <mat-form-field appearance="outline">
                        <mat-label>{{ t('humanAuthnProjects.setup.integrations.redirectUrl') }}</mat-label>
                        <input matInput formControlName="redirectUrl" />
                    </mat-form-field>
                    <mat-form-field appearance="outline">
                        <mat-label>{{ t('humanAuthnProjects.setup.integrations.webhook') }}</mat-label>
                        <mat-select formControlName="webhook">
                            <mat-option [value]="null">{{ t('humanAuthnProjects.setup.integrations.noWebhook') }}</mat-option>
                            @for (webhook of webhooks; track webhook._id) {
                                <mat-option [value]="webhook._id">{{ webhook.name || webhook._id }}</mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <a routerLink="/smart-monitor/webhooks" class="text-sm underline">
                        {{ t('humanAuthnProjects.setup.integrations.manageWebhooks') }}
                    </a>
                </div>
            </div>
        </ng-container>
    `,
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
}
