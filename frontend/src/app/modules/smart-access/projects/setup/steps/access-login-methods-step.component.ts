import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'access-login-methods-step',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatSlideToggleModule,
        TranslocoModule,
    ],
    templateUrl: './access-login-methods-step.component.html',
    styleUrls: ['./access-login-methods-step.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessLoginMethodsStepComponent {
    @Input({ required: true }) form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    loginSettings(): FormGroup {
        return this.form.get('projectFlow.loginSettings') as FormGroup;
    }
}
