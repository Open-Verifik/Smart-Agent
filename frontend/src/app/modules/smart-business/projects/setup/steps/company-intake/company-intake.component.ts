import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'company-intake',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        MatSelectModule,
        MatSlideToggleModule,
        TranslocoModule,
    ],
    templateUrl: './company-intake.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyIntakeComponent {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    readonly entityTypes = [
        { code: 'SAS', name: 'Sociedad por Acciones Simplificada (S.A.S.)' },
        { code: 'SA', name: 'Sociedad Anónima (S.A.)' },
        { code: 'LTDA', name: 'Sociedad de Responsabilidad Limitada (Ltda.)' },
        { code: 'LLC', name: 'Limited Liability Company (LLC)' },
        { code: 'CORP', name: 'Corporation (Inc. / Corp.)' },
        { code: 'ESAL', name: 'Entidad Sin Ánimo de Lucro (ESAL / Fundación)' },
    ];

    get intakeGroup(): FormGroup {
        return this.form.get('projectFlow.companyIntake') as FormGroup;
    }

    isEntityTypeSelected(code: string): boolean {
        const types = (this.intakeGroup?.get('allowedEntityTypes')?.value as string[]) || [];
        return types.includes(code);
    }

    toggleEntityType(code: string, checked: boolean): void {
        const ctrl = this.intakeGroup?.get('allowedEntityTypes');
        if (!ctrl) return;
        const current = [...((ctrl.value as string[]) || [])];
        if (checked && !current.includes(code)) {
            current.push(code);
        } else if (!checked) {
            const idx = current.indexOf(code);
            if (idx >= 0) current.splice(idx, 1);
        }
        ctrl.setValue(current);
        ctrl.markAsDirty();
    }
}
