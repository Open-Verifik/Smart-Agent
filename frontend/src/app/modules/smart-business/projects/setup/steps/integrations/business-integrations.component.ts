import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
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
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        TranslocoModule,
    ],
    templateUrl: './business-integrations.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessIntegrationsComponent {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    get integrationsGroup(): FormGroup {
        return this.form.get('projectFlow.integrations') as FormGroup;
    }
}
