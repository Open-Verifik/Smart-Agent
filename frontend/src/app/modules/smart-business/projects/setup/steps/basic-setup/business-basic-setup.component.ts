import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'business-basic-setup',
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
    templateUrl: './business-basic-setup.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessBasicSetupComponent {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    readonly availableCountries = [
        { code: 'CO', value: 'Colombia', name: 'Colombia' },
        { code: 'MX', value: 'Mexico', name: 'México' },
        { code: 'US', value: 'United States', name: 'United States' },
        { code: 'CL', value: 'Chile', name: 'Chile' },
        { code: 'PE', value: 'Peru', name: 'Perú' },
        { code: 'PA', value: 'Panama', name: 'Panamá' },
        { code: 'EC', value: 'Ecuador', name: 'Ecuador' },
        { code: 'ES', value: 'Spain', name: 'España' },
        { code: 'BR', value: 'Brazil', name: 'Brasil' },
        { code: 'AR', value: 'Argentina', name: 'Argentina' },
        { code: 'CA', value: 'Canada', name: 'Canada' },
        { code: 'IN', value: 'India', name: 'India' },
        { code: 'CN', value: 'China', name: 'China' },
        { code: 'ID', value: 'Indonesia', name: 'Indonesia' },
    ];

    readonly languages = [
        { code: 'es', name: 'Español' },
        { code: 'en', name: 'English' },
        { code: 'pt', name: 'Português' },
        { code: 'fr', name: 'Français' },
    ];

    get dataProtectionGroup(): FormGroup {
        return this.form.get('dataProtection') as FormGroup;
    }
}
