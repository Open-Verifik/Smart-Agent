import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
    inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'business-integrations',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './business-integrations.component.html',
    styleUrl: '../_kyb-journey.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessIntegrationsComponent implements OnInit, OnChanges {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _subBound = false;

    ngOnInit(): void {
        this._bindChanges();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['form']) {
            this._subBound = false;
            this._bindChanges();
        }
    }

    private _bindChanges(): void {
        if (this._subBound || !this.integrationsGroup) return;
        this._subBound = true;
        this.integrationsGroup.valueChanges
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => this._cdr.markForCheck());
    }

    get integrationsGroup(): FormGroup {
        return this.form.get('projectFlow.integrations') as FormGroup;
    }

    get redirectStatusLabel(): string | null {
        const raw = String(this.integrationsGroup?.get('redirectUrl')?.value || '').trim();
        if (!raw) return null;
        try {
            return new URL(raw).host || raw;
        } catch {
            return raw;
        }
    }

    get webhookStatusLabel(): string | null {
        const raw = String(this.integrationsGroup?.get('webhook')?.value || '').trim();
        if (!raw) return null;
        try {
            return new URL(raw).host || raw;
        } catch {
            return raw;
        }
    }

    get exampleRedirectUrl(): string {
        return `${this.integrationsGroup?.get('redirectUrl')?.value || ''}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`;
    }
}
