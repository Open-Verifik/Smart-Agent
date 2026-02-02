import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { StatusCheckService } from '../status-check.service';

@Component({
    selector: 'status-check-subscribe',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatChipsModule,
        TranslocoModule,
        MatSnackBarModule,
    ],
    templateUrl: './subscribe.component.html',
    styleUrls: ['./subscribe.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SubscribeComponent implements OnInit {
    readonly separatorKeysCodes = [ENTER, COMMA] as const;
    public emails: string[] = [];
    public loading: boolean = false;
    public currentSubscription: any = null;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private _dialogRef: MatDialogRef<SubscribeComponent>,
        private _translocoService: TranslocoService,
        private _snackBar: MatSnackBar,
        private _statusCheckService: StatusCheckService,
        private _cdr: ChangeDetectorRef
    ) {
        if (data.subject?.subscription) {
            this.currentSubscription = data.subject.subscription;
            if (this.currentSubscription.emails) {
                const rawEmails = this.currentSubscription.emails;
                // Handle various formats: string, single-element array with commas, or proper array
                if (typeof rawEmails === 'string') {
                    this.emails = rawEmails.split(',').filter((e) => !!e);
                } else if (Array.isArray(rawEmails)) {
                    // Check if it's an array of one string that contains commas
                    if (rawEmails.length === 1 && rawEmails[0].includes(',')) {
                        this.emails = rawEmails[0].split(',').filter((e) => !!e);
                    } else {
                        this.emails = [...rawEmails];
                    }
                }
            }
        }
    }

    ngOnInit(): void {}

    add(event: MatChipInputEvent): void {
        const value = (event.value || '').trim();

        if (!value) return;

        // Simple email validation
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (emailRegex.test(value)) {
            if (this.emails.length >= 5) {
                this._snackBar.open(
                    this._translocoService.translate('network.alerts.max_reached'),
                    'Close',
                    { duration: 3000 }
                );
                return;
            }
            if (!this.emails.includes(value)) {
                this.emails.push(value);
            }
        } else {
            this._snackBar.open(
                this._translocoService.translate('network.alerts.invalid_email'),
                'Close',
                { duration: 3000 }
            );
        }

        event.chipInput!.clear();
    }

    remove(email: string): void {
        const index = this.emails.indexOf(email);
        if (index >= 0) {
            this.emails.splice(index, 1);
        }
    }

    save(): void {
        if (this.emails.length === 0) {
            this._snackBar.open(
                this._translocoService.translate('network.alerts.at_least_one'),
                'Close',
                { duration: 3000 }
            );
            return;
        }

        this.loading = true;
        const payload = {
            emails: this.emails, // Send as array
            appFeature: this.data.subject.method.code,
            alias: `${this.data.subject.method.code}@mg.verifik.co`,
        };

        if (this.currentSubscription) {
            // Update
            const updatePayload = {
                ...payload,
                _id: this.currentSubscription._id,
            };
            this._statusCheckService.putIncidentsSubscriptions(updatePayload).subscribe({
                next: (res) => {
                    this._dialogRef.close({ update: true, subscription: res.data || res });
                    this.loading = false;
                },
                error: () => {
                    this.loading = false;
                    this._snackBar.open(
                        this._translocoService.translate('network.alerts.error_update'),
                        'Close',
                        { duration: 3000 }
                    );
                },
            });
        } else {
            // Create
            this._statusCheckService.postIncidentsSubscriptions(payload).subscribe({
                next: (res) => {
                    this._dialogRef.close({ create: true, subscription: res.data || res });
                    this.loading = false;
                },
                error: () => {
                    this.loading = false;
                    this._snackBar.open(
                        this._translocoService.translate('network.alerts.error_create'),
                        'Close',
                        { duration: 3000 }
                    );
                },
            });
        }
    }

    delete(): void {
        if (!this.currentSubscription) return;

        this.loading = true;
        this._statusCheckService
            .deleteIncidentsSubscriptions({ _id: this.currentSubscription._id })
            .subscribe({
                next: () => {
                    this._dialogRef.close({ delete: true });
                    this.loading = false;
                },
                error: () => {
                    this.loading = false;
                    this._snackBar.open(
                        this._translocoService.translate('network.alerts.error_delete'),
                        'Close',
                        { duration: 3000 }
                    );
                },
            });
    }

    close(): void {
        this._dialogRef.close();
    }
}
