import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'representatives-policy',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,
        TranslocoModule,
    ],
    templateUrl: './representatives-policy.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepresentativesPolicyComponent {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    get repsPolicyGroup(): FormGroup {
        return this.form.get('projectFlow.representativesPolicy') as FormGroup;
    }
}
