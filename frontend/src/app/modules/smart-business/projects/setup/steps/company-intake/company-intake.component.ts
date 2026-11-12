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
        MatButtonToggleModule,
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
    styleUrl: '../_kyb-journey.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyIntakeComponent implements OnInit, OnChanges {
    @Input() form!: FormGroup;
    @Input() loading = false;
    @Input() saving = false;

    private _cdr = inject(ChangeDetectorRef);
    private _destroyRef = inject(DestroyRef);
    private _subBound = false;

    readonly entityTypes = [
        { code: 'SAS', name: 'Sociedad por Acciones Simplificada (S.A.S.)' },
        { code: 'SA', name: 'Sociedad Anónima (S.A.)' },
        { code: 'LTDA', name: 'Sociedad de Responsabilidad Limitada (Ltda.)' },
        { code: 'LLC', name: 'Limited Liability Company (LLC)' },
        { code: 'CORP', name: 'Corporation (Inc. / Corp.)' },
        { code: 'ESAL', name: 'Entidad Sin Ánimo de Lucro (ESAL / Fundación)' },
    ];

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
        if (this._subBound || !this.intakeGroup) return;
        this._subBound = true;
        this.intakeGroup.valueChanges
            .pipe(takeUntilDestroyed(this._destroyRef))
            .subscribe(() => this._cdr.markForCheck());
    }

    get intakeGroup(): FormGroup {
        return this.form.get('projectFlow.companyIntake') as FormGroup;
    }

    get selectedEntityTypesCount(): number {
        return ((this.intakeGroup?.get('allowedEntityTypes')?.value as string[]) || []).length;
    }

    get enabledProfileFieldsCount(): number {
        return (
            (this.intakeGroup?.get('collectCommercialName')?.value ? 1 : 0) +
            (this.intakeGroup?.get('collectAddress')?.value ? 1 : 0)
        );
    }

    isEntityTypeSelected(code: string): boolean {
        const types = (this.intakeGroup?.get('allowedEntityTypes')?.value as string[]) || [];
        return types.includes(code);
    }

    toggleEntityType(code: string, checked?: boolean): void {
        const ctrl = this.intakeGroup?.get('allowedEntityTypes');
        if (!ctrl) return;
        const current = [...((ctrl.value as string[]) || [])];
        const nextChecked = checked !== undefined ? checked : !current.includes(code);
        if (nextChecked && !current.includes(code)) {
            current.push(code);
        } else if (!nextChecked) {
            const idx = current.indexOf(code);
            if (idx >= 0) current.splice(idx, 1);
        }
        ctrl.setValue(current);
        ctrl.markAsDirty();
        this._cdr.markForCheck();
    }
}
